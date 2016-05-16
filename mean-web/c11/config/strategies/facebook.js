// Load the module dependencies
var passport = require('passport'),
	url = require('url'),
	FacebookStragegy = require('passport-facebook').Strategy,
	config = require('../config'),
	users = require('../../app/controllers/users.server.controller');

// Create the Facebook strategy configuration method
module.exports = function(){
	// Use the Passport's Facebook strategy
	passport.use(new FacebookStragegy({
		// the Facebook application information
		clientID: config.facebook.clientID,
		clientSecret: config.facebook.clientSecret,
		callbackURL: config.facebook.callbackURL,
		passReqToCallback: true
	},
	// accessToken: validate future requests
	// refreshToken: grab new access tokens
	// profile: containing the user profile
	// done: callback to be called when the authentication process is over
	function(req, accessToken, refreshToken, profile, done) {
		// Set the user's provider data and include tokens
		var providerData = profile._json;
		providerData.accessToken = accessToken;
		providerData.refreshToken = refreshToken;

		// Create the user OAuth profile
		var providerUserProfile = {
			firstName: profile.name.givenName,
			lastName: profile.name.familyName,
			fullName: profile.displayName,
			email: profile.emails[0].value,
			username: profile.username,
			provider: 'facebook',
			providerId: profile.id,
			providerData: providerData
		};

		// Save the user OAuth profile
		users.saveOAuthUserProfile(req, providerUserProfile, done);
	}
	));	
};
