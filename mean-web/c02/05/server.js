'use strict';

// Load the 'connect' module
var connect = require('connect');

// Create a new 'connect' application instance
var app = connect();

// Define a new middleware function
// req: This is an object that holds the HTTP request information
// res: This is an object that holds the HTTP response information and allows you to set the response properties
// next: This is the next middleware function defined in the ordered set of Connect middleware
var helloworld = function(req, res, next) {
	// Use the 'response' object to write the 'content-type' response header
	res.setHeader('Content-Type', 'text/plain');

	// Use the 'response' object to write a response body and end the request
	res.end('Hello World.');
};

// Configure the 'connect' application instance to use the 'helloworld' middleware
app.use(helloworld);

// Listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost/3000/');

// npm install connect
// node server.js

// http://localhost:3000/
