// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'example' module routes
// define URL paths and their corresponding templates
// which will be rendered whenever the user navigates to those paths
angular.module('example').config(['$routeProvider',
	function($routeProvider) {
		// define a new route
		$routeProvider.
		when('/', {
			templateUrl: 'example/views/example.client.view.html'
		}).
		// when the user navigates to an undefined URL
		otherwise({
			redirectTo: '/'
		});
	}
]); 
