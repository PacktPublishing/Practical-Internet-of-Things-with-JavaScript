var config = require('./config.js');
var mqtt = require('mqtt');
var GetMac = require('getmac');
var request = require('request');
var ADXL345 = require('adxl345-sensor');
require('events').EventEmitter.prototype._maxListeners = 100;

var adxl345 = new ADXL345(); // defaults to i2cBusNo 1, i2cAddress 0x53

var Lcd = require('lcd'),
    lcd = new Lcd({
        rs: 12,
        e: 21,
        data: [5, 6, 17, 18],
        cols: 8,
        rows: 2
    });

var aclCtr = 0,
    locCtr = 0;

var prevX, prevY, prevZ, prevSMV, prevFALL;
var locationG; // global location variable

var client = mqtt.connect({
    port: config.mqtt.port,
    protocol: 'mqtts',
    host: config.mqtt.host,
    clientId: config.mqtt.clientId,
    reconnectPeriod: 1000,
    username: config.mqtt.clientId,
    password: config.mqtt.clientId,
    keepalive: 300,
    rejectUnauthorized: false
});

client.on('connect', function() {
    client.subscribe('rpi');
    client.subscribe('socket');
    GetMac.getMac(function(err, mac) {
        if (err) throw err;
        macAddress = mac;
        displayLocation();
        initADXL345();
        client.publish('api-engine', mac);
    });
});

client.on('message', function(topic, message) {
    message = message.toString();
    if (topic === 'rpi') {
        console.log('API Engine Response >> ', message);
    } else {
        console.log('Unknown topic', topic);
    }
});

function initADXL345() {
    adxl345.init()
        .then(() => adxl345.setMeasurementRange(ADXL345.RANGE_2_G()))
        .then(() => adxl345.setDataRate(ADXL345.DATARATE_100_HZ()))
        .then(() => adxl345.setOffsetX(0)) // measure for your particular device
        .then(() => adxl345.setOffsetY(0)) // measure for your particular device
        .then(() => adxl345.setOffsetZ(0)) // measure for your particular device
        .then(() => adxl345.getMeasurementRange())
        .then((range) => {
            console.log('Measurement range:', ADXL345.stringifyMeasurementRange(range));
            return adxl345.getDataRate();
        })
        .then((rate) => {
            console.log('Data rate: ', ADXL345.stringifyDataRate(rate));
            return adxl345.getOffsets();
        })
        .then((offsets) => {
            console.log('Offsets: ', JSON.stringify(offsets, null, 2));
            console.log('ADXL345 initialization succeeded');
            loop();
        })
        .catch((err) => console.error('ADXL345 initialization failed:', err));
}

function loop() {
    // infinite loop, with 3 seconds delay
    setInterval(function() {
        // wait till we get the location
        // then start processing
        if (!locationG) return;

        readSensorValues(function(acclVals) {
            var x = acclVals.x;
            var y = acclVals.y;
            var z = acclVals.z;
            var fall = 0;
            var smv = Math.sqrt(x * x, y * y, z * z);

            if (smv > 1) {
                fall = 1;
            }

            acclVals.smv = smv;
            acclVals.fall = fall;

            var data2Send = {
                data: {
                    acclVals: acclVals,
                    location: locationG
                },
                macAddress: macAddress
            };

            // no duplicate data
            if (fall === 1 && (x !== prevX || y !== prevY || z !== prevZ || smv !== prevSMV || fall !== prevFALL)) {
                console.log('Fall Detected >> ', acclVals);
                client.publish('accelerometer', JSON.stringify(data2Send));
                console.log('Data Published');
                prevX = x;
                prevY = y;
                prevZ = z;
            }
        });

        if (locCtr === 600) { // every 5 mins
            locCtr = 0;
            displayLocation();
        }

        aclCtr++;
        locCtr++;
    }, 500); // every one second
}

function readSensorValues(CB) {
    adxl345.getAcceleration(true) // true for g-force units, else false for m/s²
        .then(function(acceleration) {
            if (CB) CB(acceleration);
        })
        .catch((err) => {
            console.log('ADXL345 read error: ', err);
        });
}

function displayLocation() {
    request('http://ipinfo.io', function(error, res, body) {
        var info = JSON.parse(body);
        // console.log(info);
        locationG = info;
        var text2Print = '';
        text2Print += 'City: ' + info.city;
        text2Print += ' Region: ' + info.region;
        text2Print += ' Country: ' + info.country + ' ';
        lcd.setCursor(16, 0); // 1st row    
        lcd.autoscroll();
        printScroll(text2Print);
    });
}

// a function to print scroll
function printScroll(str, pos) {
    pos = pos || 0;

    if (pos === str.length) {
        pos = 0;
    }

    lcd.print(str[pos]);
    //console.log('printing', str[pos]);

    setTimeout(function() {
        return printScroll(str, pos + 1);
    }, 300);
}

// If ctrl+c is hit, free resources and exit.
process.on('SIGINT', function() {
    lcd.clear();
    lcd.close();
    process.exit();
});