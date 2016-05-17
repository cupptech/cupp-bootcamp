/*
Creating Read Streams

	Here we use process.stdout.write() to echo data, rather than console.log().

	When working with an EventEmitter, the way to handle errors is to listen for error events.

	If you don’t listen for error events, but one happens anyway, Node will throw an exception. 
	An uncaught exception will cause the process to terminate.

	node app test.txt
*/

var fs = require('fs');
var stream = fs.createReadStream(process.argv[2]);

// listen for data events from the file stream
stream.on('data', function(chunk) {
  process.stdout.write(chunk);
});

stream.on('error', function(err) {
  process.stderr.write("ERROR: " + err.message + "\n");
});