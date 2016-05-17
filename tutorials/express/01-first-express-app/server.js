'use strict';
/*
HTTP Method

	Specifies the type of action the request wishes to make.

	GET POST PUT DELETE and others, Also called verbs.
*/

// Load the 'express' module
var express = require('express');

// Create a new Express application instance
var app = express();

// Mount a new middleware function
app.get('/', function(req, res){
	// Use the 'response' object to send a response
	// res.send('Hello World');
	res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

// Use the Express application instance to listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;
