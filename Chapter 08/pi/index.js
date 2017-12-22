var config = require('./config.js');
var mqtt = require('mqtt');
var GetMac = require('getmac');
var Raspistill = require('node-raspistill').Raspistill;
var crypto = require("crypto");
var fs = require('fs');
var Gpio = require('onoff').Gpio;
var exec = require('child_process').exec;

var pir = new Gpio(17, 'in', 'both');
var raspistill = new Raspistill({
    noFileSave: true,
    encoding: 'jpg',
    width: 640,
    height: 480
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

function startStreaming() {
    raspistill
        .timelapse(100, 0, function(image) { // every 100ms ~~FOREVER~~
            var data2Send = {
                data: {
                    image: image,
                    id: crypto.randomBytes(8).toString("hex")
                },
                macAddress: macAddress
            };

            client.publish('image', JSON.stringify(data2Send));
            console.log('[image]', 'published');
        })
        .then(function() {
            console.log('Timelapse Ended')
        })
        .catch(function(err) {
            console.log('Error', err);
        });
}

var isRec = false;

// keep watching for motion
pir.watch(function(err, value) {
    if (err) exit();
    if (value == 1 && !isRec) {
        console.log('Intruder detected');
        console.log('capturing video.. ');
        isRec = true;
        var videoPath = __dirname + '/video.h264';
        var file = fs.createWriteStream(videoPath);
        var video_path = './video/video' + Date.now() + '.h264';
        var cmd = 'raspivid -o ' + video_path + ' -t 5000';

        exec(cmd, function(error, stdout, stderr) {
            // output is in stdout
            console.log('Video Saved @ : ', video_path);
            require('./mailer').sendEmail(video_path, true, function(err, info) {
                setTimeout(function() {
                    // isRec = false;
                }, 3000); // don't allow recording for 3 sec after
            });
        });
    }
});

function exit() {
    pir.unexport();
    process.exit();
}