/*
Streams and Pipe

Using Streams and Pipe for better performance.
*/
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);

}).listen(3000, '127.0.0.1');