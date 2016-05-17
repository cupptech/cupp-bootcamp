/*
Copy Buffer

Syntax

Following is the syntax of the method to copy a node buffer:

buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])

	targetBuffer - Buffer object where buffer will be copied.

	targetStart - Number, Optional, Default: 0

	sourceStart - Number, Optional, Default: 0

	sourceEnd - Number, Optional, Default: buffer.length
*/

var buffer1 = new Buffer('ABC');
//copy a buffer
var buffer2 = new Buffer(2);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());