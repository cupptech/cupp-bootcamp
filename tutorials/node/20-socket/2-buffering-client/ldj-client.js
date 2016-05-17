"use strict";
/*
LDJClient is a constructor function, inherit from EventEmitter.

Use the stream parameter in the LDJClient to retrieve and buffer input, 
take the incoming raw data from the stream and convert it into message events 
containing the parsed message objects.

Export the LDJClient constructor function and a convenience method called connect(). 
This method makes it a little easier for upstream code to create an LDJClient instance.
*/
var net = require('net');
var ldj = require('./ldj.js');

var netClient = net.connect({ port: 5432 });
var ldjClient = ldj.connect(netClient);

ldjClient.on('message', function(message) {
  if (message.type === 'watching') {
    console.log("Now watching: " + message.file);
  } else if (message.type === 'changed') {
    console.log(
      "File '" + message.file + "' changed at " + new Date(message.timestamp)
    );
  } else {
    throw Error("Unrecognized message type: " + message.type);
  }
});