/*
Reading Files Asynchronously

	Read the entire file at once, works well for small file.
	Notice how the first parameter to the readFile() callback handler is err. If readFile() is successful, then err will be false. Otherwise the err parameter will contain an Error object.
	An uncaught exception in Node will halt the program by escaping the event loop.
	The second parameter to our callback, 'data' is a buffer
*/
var fs = require('fs');
fs.readFile('test.txt', function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});