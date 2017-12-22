var mqtt = require('mqtt');
var config = require('../config/environment');

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

client.on('connect', function () {
  console.log('Connected to Mosca at ' + config.mqtt.host + ' on port ' + config.mqtt.port);
  client.subscribe('greet')
  client.publish('greet', 'Hello IoTFWjs')
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log('topic >>>', topic);
  console.log('message >>>', message.toString());
});
