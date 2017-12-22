/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var data = require('./data.model');
var socket = undefined;

exports.register = function(_socket) {
   socket = _socket;
}

function onSave(doc) {
	if(!socket) return; // if no client is connected
    // send data to only the intended device
    socket.emit('data:save:' + doc.macAddress, doc);
}


module.exports.onSave = onSave;
