/**
 * Express configuration
 */

'use strict';

var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var config = require('./environment');
var passport = require('passport');
var helmet = require('helmet');

module.exports = function(app) {
    var env = app.get('env');

    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
    app.use(passport.initialize());
    app.use(helmet());

    app.all('/api/v1/*', corsEnabler);
    app.all('/auth/*', corsEnabler);

    function corsEnabler(req, res, next) {
        // CORS headers
        res.header('Access-Control-Allow-Origin', req.headers.origin || '*'); // restrict it to the required domain
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        // Set custom headers for CORS
        res.header('Access-Control-Allow-Headers', 'Content-type,Accept,Authorization');
        res.header("Access-Control-Allow-Credentials", true);
        if (req.method == 'OPTIONS') {
            res.status(204).end();
        } else {
            next();
        }
    }

    if ('production' === env) {
        app.use(morgan('dev'));
    }

    if ('development' === env || 'test' === env) {
        app.use(require('connect-livereload')());
        app.use(morgan('dev'));
        app.use(errorHandler()); // Error handler - has to be last
    }
};
