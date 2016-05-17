
// Method 1
// Following is the syntax to create an uninitiated Buffer of 10 octets:
var buf = new Buffer(10);

// Method 2
// Following is the syntax to create a Buffer from a given array:
var buf = new Buffer([10, 20, 30, 40, 50]);

// Method 3
// Following is the syntax to create a Buffer from a given string and optionally encoding type:

var buf = new Buffer("Simply Easy Learning", "utf-8");

// Though "utf8" is the default encoding but you can use either of the encodings 
// "ascii", "utf8", "utf16le", "ucs2", "base64" or "hex".