'use strict';

/*
Make the Express application render the user object directly in the EJS view 
and then use an AngularJS service to wrap that object.
*/
// Create the 'Authentication' service
angular.module('users')
	.factory('Authentication', [
		function() {
			// Use the rendered user object
			this.user = window.user;

			// Return the authenticated user data
			return {
				user: this.user 
			};
		}
	]);