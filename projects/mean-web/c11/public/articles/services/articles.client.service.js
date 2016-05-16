'use strict';

/*
The $resource factory method accepts four arguments:
• Url: This is a parameterized base URL with parameters prefixed by a
colon such as /users/:userId
• ParamDefaults: These are the default values for the URL parameters,
which can include hardcoded values or a string prefixed with @ so the
parameter value is extracted from the data object
• Actions: These are objects representing custom methods you can use to
extend the default set of resource actions
• Options: These are objects representing custom options to extend the
default behavior of $resourceProvider

The default resource methods are as follows:
• get(): This method uses a GET HTTP method and expects a JSON object response
• save(): This method uses a POST HTTP method and expects a JSON object response
• query(): This method uses a GET HTTP method and expects a JSON array response
• remove(): This method uses a DELETE HTTP method and expects a JSON object response
• delete(): This method uses a DELETE HTTP method and expects a JSON object response

Calling each of these methods will use the $http service and invoke an HTTP
request with the specified HTTP method, URL, and parameters. The $resource
instance method will then return an empty reference object that will be populated
once the data is returned from the server. You can also pass a callback function
that will get called once the reference object is populated.
*/

// Create the 'articles' service
// AngularJS services are singleton entities
// factory(): This is used to provide the value returning from the invoked
// service function. You should use it when you want to share objects and
// data across your application.
angular.module('articles')
	.factory('Articles', ['$resource', function($resource){
		// Use the '$resource' service to return an article '$resource' object
		return $resource('api/articles/:articleId', {
			articleId: '@_id'
		}, {
			// update() method that uses the PUT HTTP method
			update: {
				method: 'PUT'
			}
		})
	}]);