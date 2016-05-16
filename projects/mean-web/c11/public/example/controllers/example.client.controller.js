// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'example' controller
// The controller's constructor function is being injected with an AngularJS object named $scope.
// Pass an annotated array of dependencies that won't change when minifie
angular.module('example').controller('ExampleController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// Expose the authentication service
		$scope.authentication = Authentication;
	}
]);
