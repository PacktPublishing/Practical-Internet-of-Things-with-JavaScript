var FreePort = require('./freeport.js');
var http = require('http'),
    fs = require('fs'),
    html = '';

module.exports = function(cb) {
    FreePort(function(err, port) {
        console.log(port);
        http.createServer(function(request, response) {
            if (request.url === '/') {
                html = fs.readFileSync('./app/index.html');
            } else {
                html = fs.readFileSync('./app' + request.url);
            }
            response.writeHeader(200, { "Content-Type": "text/html" });
            response.write(html);
            response.end();
        }).listen(port);
        cb(port);
    });
}
