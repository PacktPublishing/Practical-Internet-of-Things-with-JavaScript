/**
 * Main application routes
 */

'use strict';

var path = require('path');
var fs = require('fs');

module.exports = function(app) {

    // Insert routes below
    app.use('/api/v1/users', require('./api/user'));
    app.use('/api/v1/devices', require('./api/device'));
    app.use('/api/v1/data', require('./api/data'));

    app.use('/auth', require('./auth'));

    // image streamer
    app.get('/stream/:fname', function(req, res, next) {
        var fname = req.params.fname;
        var streamDir = __dirname + '/mqtt/stream/';
        var img = streamDir + fname;
        console.log(img);
        fs.exists(img, function(exists) {
        	if (exists) {
                return res.sendFile(img);
            } else {
                // http://www.iconarchive.com/show/small-n-flat-icons-by-paomedia/sign-ban-icon.html
                return res.sendFile(streamDir + '/no-image.png');
            }
        });
    });
};