var config = require('./config.js');
var mqtt = require('mqtt');
var GetMac = require('getmac');

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
    GetMac.getMac(function(err, macAddress) {
        if (err) throw err;
        client.publish('api-engine', macAddress);
    });
});

client.on('message', function(topic, message) {
    // message is Buffer
    // console.log('Topic >> ', topic);
    // console.log('Message >> ', message.toString());
    if (topic === 'rpi') {
        console.log('API Engine Response >> ', message.toString());
    } else {
        console.log('Unknown topic', topic);
    }
});
