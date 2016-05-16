'use strict';

/*
Testing filters is very similar to the way we
test other AngularJS components. A basic unit test that tests Angular's lowercase
filter will be as follows:
*/

describe('Testing The lowercase Filter', function(){
	beforeEach(module('mean'));

	it('Should convert a string characters to lowercase', function(){
		inject(function($filter){
			var input = 'Hello World';

			var toLowercaseFilter = $filter('lowercase');

			expect(toLowercaseFilter(input)).toEqual(input.toLowerCase());
		});
	});
});