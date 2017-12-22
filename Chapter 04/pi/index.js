var config = require('./config.js');
var mqtt = require('mqtt');
var GetMac = require('getmac');
var async = require('async');
var rpiDhtSensor = require('rpi-dht-sensor');
var McpAdc = require('mcp-adc');
var adc = new McpAdc.Mcp3208();

var dht11 = new rpiDhtSensor.DHT11(2);
var temp = 0,
    prevTemp = 0;
var humd = 0,
    prevHumd = 0;
var macAddress;
var state = 0;

var moistureVal = 0,
    prevMoistureVal = 0;
var rainVal = 0,
    prevRainVal = 0;

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
    GetMac.getMac(function(err, mac) {
        if (err) throw err;
        macAddress = mac;
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

// infinite loop, with 3 seconds delay
setInterval(function() {
    readSensorValues(function(results) {
        console.log('Temperature: ' + temp + 'C, ' + 'humidity: ' + humd + '%, ' + ' Rain level (%):' + rainVal + ', ' + 'moistureVal (%): ' + moistureVal);
        // if the temperature and humidity values change
        // then only publish the values
        if (temp !== prevTemp || humd !== prevHumd || moistureVal !== prevMoistureVal || rainVal != prevRainVal) {
            var data2Send = {
                data: {
                    t: temp,
                    h: humd,
                    r: rainVal,
                    m: moistureVal
                },
                macAddress: macAddress
            };
            // console.log('Data Published');
            client.publish('weather-status', JSON.stringify(data2Send));
            // reset prev values to current
            // for next loop
            prevTemp = temp;
            prevHumd = humd;
            prevMoistureVal = moistureVal;
            prevRainVal = rainVal;
        }
    });
}, 3000); // every three second


// `CB` expects {
//     dht11Values: val,
//     rainLevel: val,
//     moistureLevel: val
// }
function readSensorValues(CB) {
    async.parallel({
        dht11Values: function(callback) {
            var readout = dht11.read();
            // update global variable
            temp = readout.temperature.toFixed(2);
            humd = readout.humidity.toFixed(2);
            callback(null, { temp: temp, humidity: humd });
        },
        rainLevel: function(callback) {
            // we are going to connect rain sensor
            // on channel 0, hence 0 is the first arg below
            adc.readRawValue(0, function(value) {
                // update global variable
                rainVal = value;
                rainVal = (100 - parseFloat((rainVal / 4096) * 100)).toFixed(2);
                callback(null, { rain: rainVal });
            });
        },
        moistureLevel: function(callback) {
            // we are going to connect moisture sensor
            // on channel 1, hence 1 is the first arg below
            adc.readRawValue(1, function(value) {
                // update global variable
                moistureVal = value;
                moistureVal = (100 - parseFloat((moistureVal / 4096) * 100)).toFixed(2);
                callback(null, { moisture: moistureVal });
            });
        }
    }, function done(err, results) {
        if (err) {
            throw err;
        }
        // console.log(results);
        if (CB) CB(results);
    });
}
