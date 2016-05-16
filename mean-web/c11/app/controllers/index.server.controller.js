'use strict';

// Create a controller method
exports.render = function(req, res) {
	// Use the 'response' object to render the 'index' view with a 'title' and a 'user'
	// The first argument is the name of EJS template without the .ejs extension
	// The second argument is an object containing the template variables
	res.render('index', {
		title: 'Hello World',
		user: JSON.stringify(req.user)
	});
};