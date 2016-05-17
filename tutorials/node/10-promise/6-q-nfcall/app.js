/*
If you're working with functions that make use of the Node.js callback pattern, 
where callbacks are in the form of function(err, result), 
Q provides a few useful utility functions for converting between them. 
The most straightforward are probably Q.nfcall and Q.nfapply ("Node function call/apply") 
for calling Node.js-style functions and getting back a promise:
*/

var fs = require('fs');
var Q = require('q');

Q.nfcall(fs.readFile, 'test.txt', 'utf-8')
.then(function(data){
	console.log(data);
}).catch(function(err){
	console.log(err);
});

Q.nfapply(fs.readFile, ['test.txt', 'utf-8'])
.then(function(data){
	console.log(data);
}).catch(function(err){
	console.log(err);
});

