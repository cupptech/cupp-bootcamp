/*
Pipe

	Connecting two streams by writing to one stream what is being read from another. 

	Readable stream to writable stream.
*/
var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// create transform stream
var gzip = zlib.createGzip();

readable.pipe(writable);

// stream chaining
// Chanining is a mechanism to connect output of one stream to another stream 
// and create a chain of multiple stream operations.
readable.pipe(gzip).pipe(compressed);


// Decompress the file input.txt.gz to input.txt
fs.createReadStream(__dirname + '/output.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream(__dirname + '/output.txt'));
  
console.log("File Decompressed.");


