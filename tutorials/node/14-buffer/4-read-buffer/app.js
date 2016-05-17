/*
Reading from Buffers

Syntax

Following is the syntax of the method to read data from a Node Buffer:

buf.toString([encoding][, start][, end])

	encoding - Encoding to use. 'utf8' is the default encoding

	start - Beginning index to start reading, defaults to 0.

	end - End index to end reading, defaults is complete buffer.

*/

buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

// Convert Buffer to JSON

var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);
console.log(json);

//Returns a size of buffer in bytes
console.log("buffer length: " + buf.length);