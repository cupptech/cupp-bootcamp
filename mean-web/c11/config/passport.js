'use strict';

// Load the module dependencies
var passport = require('passport'),
	mongoose = require('mongoose');

// Define the Passport configuration method
module.exports = function(){
	// Load the 'User' model
	var User = mongoose.model('User');

	// When a user is authenticated, Passport will save its _id property to the session. 
	// Later on when the user object is needed, Passport will use the _id property
	// to grab the user object from the database.

	// User Passport's 'serializeUser' method to serialize the user id
	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	// Use Passport's 'deserializeUser' method to load the user document
	passport.deserializeUser(function(id, done){
		User.findOne({
			_id: id
		}, '-password -salt', function(err, user){
			done(err, user);
		});	
	});

	// Load Passport's strategies configuration files
	require('./strategies/local.js')();
	require('./strategies/twitter.js')();
	require('./strategies/facebook.js')();
	require('./strategies/google.js')();

};

