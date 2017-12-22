var fs = require('fs');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'arvind.ravulavaru@gmail.com',
        pass: '**********'
    }
});

var timerId;

module.exports.sendEmail = function(file, deleteAfterUpload, cb) {
    if (timerId) return;

    timerId = setTimeout(function() {
        clearTimeout(timerId);
        timerId = null;
    }, 10000);

    console.log('Sendig an Email..');

    var mailOptions = {
        from: 'Pi Bot <pi.intruder.alert@gmail.com>',
        to: 'user@email.com',
        subject: '[Pi Bot] Intruder Detected',
        html: 'Intruder Detected. Please check the video attached. <br/><br/> Intruder Detected At : ' + Date(),
        attachments: [{
            path: file
        }]
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('Message sent: ' + info.response);
            if (deleteAfterUpload) {
                fs.unlink(path);
            }
        }

        if (cb) {
            cb(err, info);
        }
    });
}