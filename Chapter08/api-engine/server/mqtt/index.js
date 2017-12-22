var Data = require('../api/data/data.model');
var mqtt = require('mqtt');
var config = require('../config/environment');
var fs = require('fs');
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
    client.subscribe('image');
});

client.on('message', function(topic, message) {
    // message is Buffer
    // console.log('Topic >> ', topic);
    // console.log('Message >> ', message.toString());
    if (topic === 'api-engine') {
        var macAddress = message.toString();
        console.log('Mac Address >> ', macAddress);
        client.publish('rpi', 'Got Mac Address: ' + macAddress);
    } else if (topic === 'image') {
        message = JSON.parse(message.toString());
        // convert string to buffer
        var image = Buffer.from(message.data.image, 'utf8');
        var fname = 'stream_' + ((message.macAddress).replace(/:/g, '_')) + '.jpg';
        fs.writeFile(__dirname + '/stream/' + fname, image, { encoding: 'binary' }, function(err) {
            if (err) {
                console.log('[image]', 'save failed', err);
            } else {
                console.log('[image]', 'saved');
            }
        });

        // as of now we are not going to
        // store the image buffer in DB. 
        // Gridfs would be a good way
        // instead of storing a stringified text
        delete message.data.image;
        message.data.fname = fname;

        // create a new data record for the device
        Data.create(message, function(err, data) {
            if (err) return console.error(err);
            // if the record has been saved successfully, 
            // websockets will trigger a message to the web-app
            // console.log('Data Saved :', data);
        });
    } else {
        console.log('Unknown topic', topic);
    }
});