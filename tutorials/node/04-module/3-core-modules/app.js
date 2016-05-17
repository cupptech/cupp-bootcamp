'use strict';
/*
Core modules are modules that were compiled into the Node binary.

The core modules provide most of the basic functionalities of Node, including filesystem
access, HTTP and HTTPS interfaces, and much more.

To load a core module, you just need to use the require method in your JavaScript file.
*/

// When you require the 'fs' module, Node will find it in the core modules folder.
var fs = require('fs');

fs.readFile('./test.txt', 'utf8', function(err, data){
	if (err) return console.log(err);

	console.log(data);
});
