'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
    name: String,
    macAddress: String,
    createdBy: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
});

DeviceSchema.pre('save', function(next) {
    var now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

module.exports = mongoose.model('Device', DeviceSchema);
