'use strict';

// Testing services will be very similar to testing controllers. It is even simpler since
// we can directly inject the service into our tests.

describe('Testing Articles Serices', function(){
	var _Articles;

	beforeEach(function(){
		module('mean');

		inject(function(Articles){
			_Articles = Articles;
		});
	});

	it('Should be registered', function(){
		expect(_Articles).toBeDefined();
	});

	it('Should include $resource methods', function(){
		expect(_Articles.get).toBeDefined();
		expect(_Articles.query).toBeDefined();
		expect(_Articles.remove).toBeDefined();
		expect(_Articles.update).toBeDefined();
	});

});