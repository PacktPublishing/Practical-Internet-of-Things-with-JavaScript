/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function(app) {
	
  // Insert routes below
  app.use('/api/v1/users', require('./api/user'));
  app.use('/auth', require('./auth'));
};
