'use strict';

// Load the test dependencies
var app = require('../../server.js'),
	should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Article = mongoose.model('Article');

// Define global variables
var user, article;

// Create an 'Article' model test suite
// wraps each test suite with a description
describe('Article Model Unit Tests:', function(){
	// Define a pre-tests function
	// a hook function that is executed before each test specification in a test suite
	beforeEach(function(done){
		// Create a new 'User' model instance
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		// Save the new 'User' model instance
		user.save(function(){
			article = new Article({
				title: 'Article Title',
				content: 'Article Content',
				user: user
			});
			done();			
		});
	});

	// Test the 'Article' model save method
	describe('Testing the save method', function(){
		// define a test specification using the it() method
		// a unit test
		it('Should be able to save without problems', function(){
			article.save(function(err){
				// assertion expression
				// When an assertion expression fails, 
				// will provide the test framework with a traceable error object.
				should.not.exist(err);
			});
		});

		it('Should not be able to save an article without a title', function(){
			article.title = '';

			article.save(function(err){
				should.exist(err);
			});
		});
	});

	// Define a post-tests function 
	// hook function that is executed after each test specification in a test-suite is executed
	afterEach(function(done){
		// Clean the database
		Article.remove(function(){
			User.remove(function(){
				done();
			});
		});
	});
});