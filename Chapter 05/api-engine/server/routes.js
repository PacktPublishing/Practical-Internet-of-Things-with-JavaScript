/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function(app) {
	
  // Insert routes below
  app.use('/api/v1/users', require('./api/user'));
  app.use('/api/v1/devices', require('./api/device'));
  app.use('/api/v1/data', require('./api/data'));

  app.use('/auth', require('./auth'));
};
