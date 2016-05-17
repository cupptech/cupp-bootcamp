'use strict';

/*
Connect middleware supports a feature called mounting,
which enables you to determine which request path is required for the middleware
function to get executed. 
Mounting is done by adding the path argument to the app.use() method.
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

// Define a new 'helloworld' middleware function
var helloworld = function(req, res, next) {
	// Use the 'response' object to write the 'content-type' response header
	res.setHeader('Content-Type', 'text/plain');

	// Use the 'response' object to write a response body and end the request
	res.end('Hello World.');
};

// Define a new 'goodbyeworld' middleware function
var goodbyeworld = function(req, res, next) {
	// Use the 'response' object to write the 'content-type' response header
	res.setHeader('Content-Type', 'text/plain');

	// Use the 'response' object to write a response body and end the request
	res.end('Goodbye World.');
};


// Configure the 'connect' application instance to use the 'logger' middleware
app.use(logger);

// Mount the 'connect' application instance to use the 'helloWorld' middleware
app.use('/hello', helloworld);

// Mount the 'connect' application instance to use the 'goodbyeworld' middleware
app.use('/goodbye', goodbyeworld);

// Listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost/3000/');

// npm install connect
// node server.js

// http://localhost:3000/
