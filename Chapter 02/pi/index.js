var config = require('./config.js');
var mqtt = require('mqtt');
var GetMac = require('getmac');
var rpiDhtSensor = require('rpi-dht-sensor');
var rpio = require('rpio');
var dht11 = new rpiDhtSensor.DHT11(2);
var temp = 0,
    prevTemp = 0;
var humd = 0,
    prevHumd = 0;
var macAddress;
var state = 0;

// Set pin 12 as output pin and to low
rpio.open(12, rpio.OUTPUT, rpio.LOW);

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
    client.subscribe('led');
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
    } else if (topic === 'led') {
        state = parseInt(message)
        console.log('Turning LED', state ? 'On' : 'Off');
        // If we get a 1 we turn on the led, else off
        rpio.write(12, state ? rpio.HIGH : rpio.LOW);
    } else {
        console.log('Unknown topic', topic);
    }
});

// infinite loop, with 3 seconds delay
setInterval(function() {
    getDHT11Values();
    console.log('Temperature: ' + temp + 'C, ' + 'humidity: ' + humd + '%');
    // if the temperature and humidity values change
    // then only publish the values
    if (temp !== prevTemp || humd !== prevHumd) {
        var data2Send = {
            data: {
                t: temp,
                h: humd,
                l: state
            },
            macAddress: macAddress
        };
        console.log('Data Published');
        client.publish('dht11', JSON.stringify(data2Send));
        // reset prev values to current
        // for next loop
        prevTemp = temp;
        prevHumd = humd;
    } // else chill!

}, 3000); // every three second

function getDHT11Values() {
    var readout = dht11.read();
    // update global variable
    temp = readout.temperature.toFixed(2);
    humd = readout.humidity.toFixed(2);
}
