'use strict';

// The 'message' variable is self-contained in the 'hello' module
var message = 'Hello';

// expose functionality through the 'exports' object
exports.sayHello = function(){
	console.log(message);
};

/*
In Node's CommonJS module implementation, each module is written in a single
JavaScript file and has an isolated scope that holds its own variables.
*/

