'use strict';

// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
var mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

// Create a new Mongoose connection instance
// Loaded first, so other module could use 'User' model without loading it by itself
var db = mongoose();

// Create a new Express application instance
var app = express(db);

// Configure the passport middleware, load the Passport configuration file
var passport = passport();

// Use the Express application instance to listen to the '3000' port 
// When the server starts, it will run Socket.io server along with Express application.
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our express application instance for external usage
module.exports = app;