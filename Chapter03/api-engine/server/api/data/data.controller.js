'use strict';

var Data = require('./data.model');

/**
 * Get Data for a device
 */
exports.index = function(req, res) {
    var macAddress = req.params.deviceId;
    var limit = parseInt(req.params.limit) || 30;
    Data
    .find({
        macAddress: macAddress
    })
    .sort({'createdAt': -1})
    .limit(limit)
    .exec(function(err, devices) {
        if (err) return res.status(500).send(err);
        res.status(200).json(devices);
    });
};

/**
 * Create a new data record
 */
exports.create = function(req, res, next) {
    var data = req.body;
    data.createdBy = req.user._id;
    Data.create(data, function(err, _data) {
        if (err) return res.status(500).send(err);
        res.json(_data);
    });
};