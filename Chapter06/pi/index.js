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

var x, prevX, y, prevY, z, prevZ;
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
    adxl345.init().then(function() {
            console.log('ADXL345 initialization succeeded');
            // init loop after ADXL345 has been setup
            loop();
        })
        .catch(function(err) {
            console.error('ADXL345 initialization failed: ', err);
        });
}

function loop() {
    // infinite loop, with 3 seconds delay
    setInterval(function() {
        // wait till we get the location
        // then start processing
        if (!locationG) return;

        if (aclCtr === 3) { // every 3 seconds
            aclCtr = 0;
            readSensorValues(function(acclVals) {
                var x = acclVals.x;
                var y = acclVals.y;
                var z = acclVals.z;

                var data2Send = {
                    data: {
                        acclVals: acclVals,
                        location: locationG
                    },
                    macAddress: macAddress
                };

                // no duplicate data
                if (x !== prevX || y !== prevY || z !== prevZ) {
                    console.log('data2Send', data2Send);
                    client.publish('accelerometer', JSON.stringify(data2Send));
                    console.log('Data Published');
                    prevX = x;
                    prevY = y;
                    prevZ = z;
                }
            });
        }

        if (locCtr === 300) { // every 300 seconds
            locCtr = 0;
            displayLocation();
        }

        aclCtr++;
        locCtr++;
    }, 1000); // every one second
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