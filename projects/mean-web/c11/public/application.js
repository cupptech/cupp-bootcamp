'use strict';

// Set the main application name
var mainApplicationModuleName = 'mean';

/*
When calling the angular.module() method with a single argument, it will
retrieve an existing module with that name; if it can't find one, it will throw an
error. However, when calling the angular.module() method with multiple
arguments, AngularJS will create a module with the given name, dependencies, and
configuration function.
*/
// Create the main application 
// angular.module(name, [requires], [configFn])
var mainApplicationModule = angular.module(mainApplicationModuleName, 
	['ngResource', 'ngRoute', 'users', 'example', 'articles', 'chat']);

/*
when the hash part changes, the browser will not make a request to the server. 
This enables AngularJS to support older browsers while maintaining a decent routing scheme.

For SEO, need to mark the application as a single-page application.

Hashbangs are implemented by adding an exclamation mark right after the hash sign, 
so an example URL would be http://localhost:3000/#!/example.
*/
mainApplicationModule.config(['$locationProvider',
	function($locationProvider) {
		// Configure the hashbang URLs using the $locationProvider services
		$locationProvider.hashPrefix('!');
	}
]);

// Fix Facebook's OAuth bug
// solve Facebook's redirect bug that
// adds a hash part to the application's URL after the OAuth authentication round-trip.
if (window.location.hash === '#_=_') window.location.hash = '#!';

// Manually bootstrap the AngularJS application
// Manual bootstrapping is usually useful when
// you'd like to control the bootstrap flow to make sure certain logic is being executed
// before the AngularJS application is started.
// Use the angular object jqLite functionality to bind a function to the document-ready event.
angular.element(document).ready(function(){
	// initiate a new AngularJS application
	// angular.bootstrap(element, [modules], [config])
	angular.bootstrap(document, [mainApplicationModuleName]);
});