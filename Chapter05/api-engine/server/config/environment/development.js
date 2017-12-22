'use strict';

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        uri: 'mongodb://admin:admin123@ds241055.mlab.com:41055/iotfwjs'
    },

    mqtt: {
        host: process.env.EMQTT_HOST || '127.0.0.1',
        clientId: 'API_Server_Dev',
        port: 8883
    }
};
