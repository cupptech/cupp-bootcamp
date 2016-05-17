'use strict';

/*
Node also supports the loading of folder modules:

If the folder exists, Node will go through that folder looking
for a package.json file. If Node finds a package.json file, it will try parsing it,
looking for the 'main' property, and load the module file.

If the package.json file doesn't exist or the main property isn't defined, 
Node will automatically try to load the index.js file in the folder.
*/

// Load the 'hello' module
var hello = require('../1-exports');

// Use the 'hello' module sayHello() method
hello.sayHello();

