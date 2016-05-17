/*
Slice Buffer

Syntax

Following is the syntax of the method to get a sub-buffer of a node buffer:

buf.slice([start][, end])

	start - Number, Optional, Default: 0

	end - Number, Optional, Default: buffer.length
*/

var buffer1 = new Buffer('Hello world');
//slicing a buffer
var buffer2 = buffer1.slice(0,4);
console.log("buffer2 content: " + buffer2.toString());

