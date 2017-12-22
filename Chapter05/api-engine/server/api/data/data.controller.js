'use strict';

var Data = require('./data.model');

/**
 * Get Data for a device
 */
exports.index = function(req, res) {
    var macAddress = req.params.deviceId;
    var limit = parseInt(req.params.limit) || 30;

    // In case the same raspberry is used for all examples
    // to make sure that alexa works for the data
    if (req.headers.alexskillrequest) {
        // fetch data related to this device, which is realted to 
        // smart weather station.
        Data
            .find({
                macAddress: macAddress,
                // get records which has the status
                $or: [
                    { 'data.s': 1 },
                    { 'data.s': 0 }
                ]
            })
            .sort({ 'createdAt': -1 })
            .limit(limit)
            .exec(function(err, data) {
                if (err) return res.status(500).send(err);
                res.status(200).json(data);
            });
    } else {
        Data
            .find({
                macAddress: macAddress
            })
            .sort({ 'createdAt': -1 })
            .limit(limit)
            .exec(function(err, data) {
                if (err) return res.status(500).send(err);
                res.status(200).json(data);
            });
    }

};

/**
 * Create a new data record
 */
exports.create = function(req, res, next) {
    var data = req.body || {};
    data.createdBy = req.user._id;
    // In case the same raspberry is used for all examples
    // to make sure that alexa works for the data
    if (req.headers.alexskillrequest) {
        // fetch data related to this device, which is related to 
        // smart weather station.
        Data
            .findOne({
                macAddress: req.body.macAddress,
                // get records which has the status
                $or: [
                    { 'data.s': 1 },
                    { 'data.s': 0 }
                ]
            })
            .sort({ 'createdAt': -1 })
            .exec(function(err, _devData) {
                if (err) return res.status(500).send(err);

                if(!_devData){
                    return res.status(404).send(err);
                }

                data.topic = 'socket';
                // update the status
                _devData.data.s = req.body.status;
                data.data = _devData.data;
                console.log(data);

                Data.create(data, function(err, _data) {
                    if (err) return res.status(500).send(err);
                    if (data.topic === 'socket') {
                        require('../../mqtt/index.js').sendSocketData(data.data.s); // send relay value
                    }
                    return res.json(_data);
                });
            });


    } else {
        Data.create(data, function(err, _data) {
            if (err) return res.status(500).send(err);
            if (data.topic === 'socket') {
                require('../../mqtt/index.js').sendSocketData(data.data.s); // send relay value
            }
            return res.json(_data);
        });
    }
};
