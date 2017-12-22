'use strict';

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        uri: 'mongodb://admin:admin123@ds125481.mlab.com:25481/iotjs'
    },

    mqtt: {
        host: process.env.EMQTT_HOST || '127.0.0.1',
        clientId: 'API_Server_Dev',
        port: 8883
    }
};
