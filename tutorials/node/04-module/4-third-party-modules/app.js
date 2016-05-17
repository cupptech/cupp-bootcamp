'use strict';

/*
Use NPM to install third-party modules:

	npm install cat-me

To use third-party modules, you can just require them as you would normally require a core module.

Node will first look for the module in the core modules folder and then try to load the module from
the module folder inside the node_modules folder.
*/

var catMe = require('cat-me');

// Print random ASCII cat
console.log(catMe());
