'use strict';

// Load the 'connect' module
var connect = require('connect');

// Create a new 'connect' application instance
var app = connect();

// Listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost/3000/');

// npm install connect
// node server.js

// http://localhost:3000/
// Cannot GET /