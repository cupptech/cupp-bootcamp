"use strict";
/*
EventEmitter
  
  EventEmitter provides a channel for events to be dispatched and listeners notified.

  Many objects in Node inherit from EventEmitter, like the Streams.

  An event listener is a callback function that is invoked 
  when an event of a specified type is dispatched.

  Since the Stream class inherits from EventEmitter, we can listen for events 
  from the child process’s standard output stream.

  Like Stream, the ChildProcess class extends EventEmitter.

Buffer

  A Buffer is Node’s way of representing binary data. 
  It points to a blob of memory allocated by Node’s native core, 
  outside of the JavaScript engine. Buffers can’t be resized and they require encoding 
  and decoding to convert to and from JavaScript strings.

  Calling toString() explicitly converts the buffer’s contents to a JavaScript string 
  using Node’s default encoding (UTF-8).
*/
var
  fs = require('fs'),
  spawn = require('child_process').spawn,
  filename = process.argv[2];

if (!filename) {
  throw Error("A file to watch must be specified!");
}

fs.watch(filename, function() {
  var
    ls = spawn('ls', ['-lh', filename]),
    output = '';

  // Data events pass along a buffer object
  ls.stdout.on('data', function(chunk){
    output += chunk.toString();
  });

  // After a child process has exited and all its streams have been flushed, it emits a close event.
  ls.on('close', function(){
    var parts = output.split(/\s+/);
    console.dir([parts[0], parts[4], parts[8]]);
  });
});

console.log("Now watching " + filename + " for changes...");