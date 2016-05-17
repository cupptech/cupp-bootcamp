/*
process.argv
This program uses process.argv to access the incoming command-line arguments. 
argv stands for argument vector; it’s an array containing 'node' 
and the full path to the app.js as its first two elements. 
The third element (that is, at index 2) is test.txt, the name of our target file.
*/
var fs = require('fs');
var filename = process.argv[2];

if (!filename) {
  throw Error("A file to watch must be specified!");
}
fs.watch(filename, function() {
  console.log("File " + filename + " just changed!");
});
console.log("Now watching " + filename + " for changes...");