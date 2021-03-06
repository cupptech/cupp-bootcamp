/*
Compare Buffers

Syntax

Following is the syntax of the method to compare two Node buffers:

buf.compare(otherBuffer);

	otherBuffer - This is the other buffer which will be compared with 'buf'
*/

var buffer1 = new Buffer('ABCD');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

// Returns a number indicating whether this comes before 
// or after or is the same as the otherBuffer in sort order.
if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
   console.log(buffer1 +" comes after " + buffer2);
}