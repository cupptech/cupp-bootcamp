/*
This program writes “a witty message” to test.txt (creating it if it doesn’t exist, 
or overwriting it if it does). 
If for any reason the file couldn’t be written, then the err parameter will contain an Error object.
*/

var fs = require('fs');
fs.writeFile('test.txt', 'a witty message', function (err) {
  if (err) {
    throw err;
  }
  console.log("File saved!");
});