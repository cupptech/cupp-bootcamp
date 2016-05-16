'use strict';

// Testing directives will usually require you to provide an
// HTML template and use Angular's $compile service. A basic unit test that tests
// the ngBind directive will be as follows:

describe('Testing The ngBind Directive', function(){
	beforeEach(module('mean'));

	it ('Should bind a value to an HTML element', function(){
		inject(function($rootScope, $compile){
			var _scope = $rootScope.$new();

			// use the $compile service to compile the HTML template with the scope object
			var element = $compile('<div data-ng-bind="testValue"></div>')(_scope);

			_scope.testValue = 'Hello World';

			// run a digest cycle
			_scope.$digest();

			// validate that the model value is indeed rendered
			expect(element.html()).toEqual(_scope.testValue);
		});

	});
});
