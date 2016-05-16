'use strict';
/*
	Passport's local strategy is a Node.js module that allows you to implement a 
	username/password authentication mechanism.
*/

// Load the module dependencies
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	User = require('mongoose').model('User');

// Create the Local strategy configuration method
module.exports = function() {
	// Use the Passport's Local strategy
	// Use an instance of the LocalStrategy object.
	passport.use(new LocalStrategy(function(username, password, done){
		// Find a user with the current username
		User.findOne({
			username: username
		}, function(err, user){
			// If an error occurs, continue to the next middleware
			if (err) return done(err);

			// If a user was not found, continue to the next middleware with an error message
			if (!user) {
				return done(null, false, { message: 'Unknown user' });
			}

			// If the passport is incorrect, continue to the next middleware with an error message
			if (!user.authenticate(password)) {
				return done(null, false, { message: 'Invalid password' });
			}

			// Otherwise continue to the next middleware with the user object
			// User is authenticated
			return done(null, user); 
		});
	}));
};