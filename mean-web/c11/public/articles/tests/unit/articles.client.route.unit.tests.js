'use strict';

// Testing routes is even simpler. All you have to do is inject the $route service and test
// the routes collection.
describe('Testing Articles Routing', function(){
	beforeEach(module('mean'));

	it('Should map a "list" route', function(){
		inject(function($route){
			expect($route.routes['/articles'].templateUrl)
				.toEqual('articles/views/list-articles.client.view.html');
		});
	});
});