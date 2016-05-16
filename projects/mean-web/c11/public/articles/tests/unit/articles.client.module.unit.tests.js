'use strict';

describe('Testing articles Module', function(){
	var articlesModule;

	beforeEach(function(){
		articlesModule = angular.module('articles');
	});

	it('Should be registered', function(){
		expect(articlesModule).toBeDefined();
	});
});