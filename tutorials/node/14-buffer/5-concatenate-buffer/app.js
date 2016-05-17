/*
Concatenate Buffers

Syntax
Following is the syntax of the method to concatenate Node buffers to a single Node Buffer:

Buffer.concat(list[, totalLength])

	list - Array List of Buffer objects to be concatenated

	totalLength - This is the total length of the buffers when concatenated
*/


var buffer1 = new Buffer('Cupp ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());