'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	crypto = require('crypto'),
	Schema = mongoose.Schema;

// Define a new 'UserSchema' using the Schema constructor 
var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: {
		type: String,
		// match validator: validate the email format
		// make sure the email field value matches the given regex expression 
		match: [/.+\@.+\..+/, 'Please fill a valid email address']
	},
	username: {
		type: String,
		// Set a unique 'username' index
		// Mongoose create index automatically when the application starts, could cause performance issue
		unique: true,
		// Validate 'username' value existence
		required: 'Username is required',
		// Trim the 'username' field
		// trim modifier to remove whitespaces
		trim: true	
	},
	password: {
		type: String,
		// Validate the 'password' value length
		// Validators are defined at the field level of a document and are executed when the
		// document is being saved. If a validation error occurs, the save operation is aborted
   		// and the error is passed to the callback.
		validate: [
			// an array consisting of a validation function and an error message
			function(password) {
				return password && password.length > 6;
			}, 'Password should be longer'
		]
	},
	// use to hash your password
	salt: {	
		type: String
	},
	// indicate the strategy used to register the user
	provider: {
		type: String,
		required: 'Provider is required'
	},
	// the user identifier for the authentication strategy
	providerId: String,
	// use to store the user object retrieved from OAuth providers
	prividerData: {},
	created: {
		type: Date,
		default: Date.now	// defining default values
	}

});

// Set the 'fullname' virtual property
// Dynamically calculated document properties, without getting persisted to MongoDB.
UserSchema.virtual('fullName')
	.get(function(){
		return this.firstName + ' ' + this.lastName;
	})
	.set(function(fullName){
		var splitName = fullName.split(' ');
		this.firstName = splitName[0] || '';
		this.lastName = splitName[1] || '';
	});

// User a pre-save middleware to hash the password
// Pre middleware gets executed before the operation happens.
// This functionality makes pre middleware perfect for more complex validations and
// default values assignment.
UserSchema.pre('save',function(next){
	if (this.password) {
		// generate random hashing salt
		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
		this.password = this.hashPassword(this.password);
	}
	next();

	// if there is error:
	// next(new Error('An Error Occured'));
});

// Defining custom instance methods
// Create an instance method for hashing a password
UserSchema.methods.hashPassword = function(password) {
	return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

// Create an instance method for authenticating user
UserSchema.methods.authenticate = function(password) {
	return this.password === this.hashPassword(password);
};

// Defining custom static methods, perform model-level operations
// Find possible not used username 
UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
	var self = this;

	// Add a 'username' suffix
	var possibleUsername = username + (suffix || '');

	// Find an available unique username
	self.findOne({
		username: possibleUsername
	}, function(err, user){
		// If an error occurs, call the callback with null value
		if (!err) {
			// If an available unique username was found, call the callback method
			// otherwise call the 'findUniqueUsername' method again with a new suffix
			if (!user) {
				callback(possibleUsername);
			} else {
				return self.findUniqueUsername(username, (suffix || 0) + 1, callback);
			}
		} else {
			callback(null);
		}
	});
};

// Configure to use getters and virtuals when transforming to JSON representation
UserSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

// Create the 'User' model out of the 'UserSchema' 
mongoose.model('User', UserSchema);

