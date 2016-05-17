'use strict';
/*
Pub/Sub

ØMQ takes care of low-level details like buffering and reconnecting.

ZeroMQ provide Pub-sub pattern, which connects a set of publishers to a set of subscribers. 
This is a data distribution pattern.
*/
var fs = require('fs');
var zmq = require('zmq');

// create publisher endpoint
var publisher = zmq.socket('pub');

var filename = process.argv[2];

fs.watch(filename, function(){

  // send message to any subscribers
  publisher.send(JSON.stringify({
    type: 'changed',
    file: filename,
    timestamp: Date.now()
  }));

});

// listen on TCP port 5432
publisher.bind('tcp://*:5432', function(err) {
  console.log('Listening for zmq subscribers...');
});