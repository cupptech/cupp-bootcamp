'use strict';

// Define the routes module's method
module.exports = function(app){
	// Load the 'index' controller
	var index = require('../controllers/index.server.controller.js');

	// Mount the 'render' method
	app.get('/', index.render);
};
