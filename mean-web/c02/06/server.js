'use strict';
/*
The order of the middleware:
- FIFO (first-in-first-out)
- Connect will then pass the next middleware function 
	to the currently executing middleware function using the 'next' argument.
- Removing the next() call, the request would hang
	forever as the response is never ended by calling the res.end() method.
*/

// Load the 'connect' module
var connect = require('connect');

// Create a new 'connect' application instance
var app = connect();

// Define a new 'logger' middelware function
var logger = function(req, res, next) {
	// Log request information to the console
	console.log(req.method, req.url);

	// Call the next middleware
	next();
};

// Define a new middleware function
var helloworld = function(req, res, next) {
	// Use the 'response' object to write the 'content-type' response header
	res.setHeader('Content-Type', 'text/plain');

	// Use the 'response' object to write a response body and end the request
	res.end('Hello World.');
};

// Configure the 'connect' application instance to use the 'logger' middleware
app.use(logger);

// Configure the 'connect' application instance to use the 'helloworld' middleware
app.use(helloworld);

// Listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost/3000/');

// npm install connect
// node server.js

// http://localhost:3000/
