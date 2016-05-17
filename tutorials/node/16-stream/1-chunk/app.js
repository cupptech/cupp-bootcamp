/*
Chunk
	A piece of data being sent through a stream.
	Data is split in 'chunks' and streamed.
	Request: Readable Stream
	Response: Writable Stream
*/

var fs = require('fs');

// The __dirname represents the name of the directory that the currently executing script resides in.
var readable = fs.createReadStream(__dirname + '/greet.txt', { 
	encoding: 'utf8', 
	highWaterMark: 1 * 1024 
});

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
    console.log(chunk);
    console.log('-------------');
    writable.write(chunk);
});
