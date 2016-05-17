"use strict";
/*
This program uses net.connect() to create a client connection to localhost port 5432, 
then waits for data. The client object is a Socket, just like the incoming connection 
we saw on the server side.

Whenever a data event happens, our callback function takes the incoming buffer object, 
parses the JSON message.
*/
var net = require('net');
var client = net.connect({port: 5432});

client.on('data', function(data) {
  var message = JSON.parse(data);
  if (message.type === 'watching') {
    console.log("Now watching: " + message.file);
  } else if (message.type === 'changed') {
    var date = new Date(message.timestamp);
    console.log("File '" + message.file + "' changed at " + date);
  } else {
    throw Error("Unrecognized message type: " + message.type);
  }
}); 