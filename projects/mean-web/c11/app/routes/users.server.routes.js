'use strict';

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
	passport = require('passport');

module.exports = function(app) {
	// Set up the 'signup' routes
	app.route('/signup')
		.get(users.renderSignup)
		.post(users.signup);

	// Set up the 'signin' routes
	app.route('/signin')
		.get(users.renderSignin)
		// When the passport.authenticate() method is executed, it will try to authenticate
		// the user request using the strategy defined by its first argument.
		.post(passport.authenticate('local', {
			successRedirect: '/',		// redirect once it successfully authenticated the user
			failureRedirect: '/signin',	// redirect once it failed to authenticate the user
			failureFlash: true			// whether or not to use flash message
		}));

	// Set up the Facebook OAuth routes
	// Route to start the user authentication process
	app.get('/oauth/facebook', passport.authenticate('facebook', {
		failureRedirect: '/signin'
	}));
	// To finish the authentication process once the user has linked their Facebook profile
	app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
		failureRedirect: '/signin',
		successRedirect: '/'
	}));

	// Set up the Twitter OAuth routes
	app.get('/oauth/twitter', passport.authenticate('twitter', {
		failureRedirect: '/signin'
	}));
	app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
		failureRedirect: '/signin',
		successRedirect: '/'
	}));

	// Set up the Google Oauth routes
	app.get('/oauth/google', passport.authenticate('google', {
		scope: [
			'https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email'
		], 
		failureRedirect: '/signin'
	}));
	app.get('/oauth/google/callback', passport.authenticate('google', {
		failureRedirect: '/signin',
		successRedirect: '/'
	}));

	// Set up the 'singout' route
	app.get('/signout', users.signout);
}; 