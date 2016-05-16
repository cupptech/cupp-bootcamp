'use strict';

/*
A RESTful API usually complies with a few simple rules:
• A base URI per resource, in our case http://localhost:3000/articles
• A data structure, usually JSON, passed in the request body
• Usage of standard HTTP methods (for example, GET, POST, PUT, and DELETE)

RESTful API:
• GET http://localhost:3000/articles: This will return a list of articles
• POST http://localhost:3000/articles : This will create and return a new article
• GET http://localhost:3000/articles/:articleId: This will return a single existing article
• PUT http://localhost:3000/articles/:articleId: This will update and return a single existing article
• DELETE http://localhost:3000/articles/:articleId: This will delete and return a single article

*/

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
	articles = require('../../app/controllers/articles.server.controller');

// Define the routes module's method
module.exports = function(app) {
	// Set up the 'articles' base routes
	app.route('/api/articles')
		.get(articles.list)
		.post(users.requiresLogin, articles.create);

	// Set up the articles parameterized routes
	app.route('/api/articles/:articleId')
		.get(articles.read)
		.put(users.requiresLogin, articles.hasAuthorization, articles.update)
		.delete(users.requiresLogin, articles.hasAuthorization, articles.delete);

	// Set up the 'articleId' parameter middleware
	// Defines a middleware to be executed before any other middleware that uses the parameter
	// This design pattern is useful when building a RESTful API, where you often add request
	// parameters to the routing string.
	app.param('articleId', articles.articleByID); 
};