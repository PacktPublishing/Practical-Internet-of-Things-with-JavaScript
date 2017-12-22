var config = require('./config.js');
var mqtt = require('mqtt');
var GetMac = require('getmac');
var Raspistill = require('node-raspistill').Raspistill;
var crypto = require("crypto");
var Gpio = require('onoff').Gpio;
var exec = require('child_process').exec;

var AWS = require('aws-sdk');

var pir = new Gpio(17, 'in', 'both');
var raspistill = new Raspistill({
    noFileSave: true,
    encoding: 'bmp',
    width: 640,
    height: 480
});

// Rekognition config
var config = {
    collectionName: 'AIOWJS-FACES',
    region: 'eu-west-1',
    accessKeyId: 'ACCESSKEYID',
    secretAccessKey: 'SECRETACCESSKEY'
};

AWS.config.region = config.region;

var rekognition = new AWS.Rekognition({
    region: config.region,
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey
});

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
        // startStreaming();
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


var processing = false;

// keep watching for motion
pir.watch(function(err, value) {
    if (err) exit();
    if (value == 1 && !processing) {
        raspistill.takePhoto()
            .then((photo) => {
                console.log('took photo');
                checkForMatch(photo, function(err, authorizedFace) {
                    if (err) {
                        console.error(err);
                    } else {
                        if (authorizedFace) {
                            console.log('User Authorized');
                        } else {
                            // unauthorized user, 
                            // send an email!
                            require('./mailer').sendEmail(photo, function(err, info) {
                                if (err) {
                                    console.error(err);
                                } else {
                                    console.log('Email Send Success', info);
                                }
                            });
                        }
                    }
                });
            })
            .catch((error) => {
                console.error('something bad happened', error);
            });
    }
});

function checkForMatch(image, cb) {
    rekognition.searchFacesByImage({
        'CollectionId': config.collectionName,
        'FaceMatchThreshold': 80,
        'Image': {
            'Bytes': image,
        },
        'MaxFaces': 1
    }, (err, data) => {
        if (err) {
            console.error(err, err.stack); // an error occurred
            cb(err, null);
        } else {
            // console.log(data); // successful response
            console.log(data.FaceMatches.length > 0 ? data.FaceMatches[0].Face : data);
            cb(null, data.FaceMatches.length >= 1);
        }
    });
}

function exit() {
    pir.unexport();
    process.exit();
}