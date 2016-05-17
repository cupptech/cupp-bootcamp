'use strict';
/*
REQ/REP (request/reply) pattern

In ØMQ, a REQ/REP pair communicates in lockstep. A request comes in, then a reply goes out. 
Additional incoming requests are queued and later dispatched by ØMQ. Your application, 
however, is only aware of one request at a time.

Request-reply pattern, which connects a set of clients to a set of services. 
This is a remote procedure call and task distribution pattern.

Each endpoint of the application operates on only one request or one response at a time. 
There is no parallelism.
*/
var fs = require('fs');
var zmq = require('zmq');

// socket to reply to client requests
var responder = zmq.socket('rep');
// handle incoming requests
responder.on('message', function(data) {

  // parse incoming message
  var request = JSON.parse(data);
  console.log('Received request to get: ' + request.path);

  // read file and reply with content
  fs.readFile(request.path, function(err, content) {
    console.log('Sending response content');
    responder.send(JSON.stringify({
      content: content.toString(),
      timestamp: Date.now(),
      pid: process.pid
    }));
  });

});

// listen on TCP port 5433
responder.bind('tcp://127.0.0.1:5433', function(err) {
  console.log('Listening for zmq requesters...');
});

// close the responder when the Node process ends
process.on('SIGINT', function() {
  console.log('Shutting down...');
  responder.close();
});