var Data = require('../api/data/data.model');
var mqtt = require('mqtt');
var config = require('../config/environment');
var RulesEngine = require('../ifttt/ifttt.js');

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
    console.log('Connected to Mosca at ' + config.mqtt.host + ' on port ' + config.mqtt.port);
    client.subscribe('api-engine');
    client.subscribe('accelerometer');
});

client.on('message', function(topic, message) {
    // message is Buffer
    // console.log('Topic >> ', topic);
    // console.log('Message >> ', message.toString());
    if (topic === 'api-engine') {
        var macAddress = message.toString();
        console.log('Mac Address >> ', macAddress);
        client.publish('rpi', 'Got Mac Address: ' + macAddress);
    } else if (topic === 'accelerometer') {
        var data = JSON.parse(message.toString());
        console.log('data >> ', data);
        // create a new data record for the device
        Data.create(data, function(err, data) {
            if (err) return console.error(err);
            // if the record has been saved successfully, 
            // websockets will trigger a message to the web-app
            // console.log('Data Saved :', data.data);
            // Invoke IFTTT Rules Engine
            RulesEngine.processData(data);
        });
    } else {
        console.log('Unknown topic', topic);
    }
});