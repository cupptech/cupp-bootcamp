Mocha 

	http://visionmedia.github.io/mocha/

	npm install mocha -g
	$ NODE_ENV=test mocha --reporter spec app/tests

Should.js
	
	The Should.js library extends Object.prototype with a non-enumerable getter that
	allows you to express how that object should behave. One of Should.js' powerful
	features is that every assertion returns a wrapped object, so assertions can be chained.

	https://github.com/shouldjs/should.js

SuperTest

	Providing developers with an abstraction layer that makes HTTP assertions.

	Help you to test your controller endpoints, thus covering the code that's exposed to the browser.

	https://github.com/visionmedia/supertest

Jasmine

	Jasmine uses the same terminology as Mocha's BDD interface, including
	the describe(), it(), beforeEach(), and afterEach() methods. However, unlike
	Mocha, Jasmine comes prebundled with assertion capabilities using the expect()
	method chained with assertion methods called Matchers.  

	http://jasmine.github.io/2.0/introduction.html

Karma test runner
	
	The Karma test runner is a utility developed by the AngularJS team that helps
	developers with executing tests in different browsers.

	PhantomJS is a headless WebKit browser often used in programmable
	scenarios where you don't need a visual output; that's why it fits
	perfectly for testing purposes. You can learn more about PhantomJS
	by visiting the official documentation at http://phantomjs.org/
	documentation/.

	$ npm install -g karma-cli

	karma.conf.js

	$ NODE_ENV=test karma start 

E2E Test

	npm install protractor --save-dev
	node ./node_modules/protractor/bin/webdriver-manager update 

	http://programmerbuddy.blogspot.ca/2014/03/full-automation-of-protractor-e2e-tests.html

	$ npm install -g protractor
	$ webdriver-manager update
	protractor.conf.js

	Running your AngularJS E2E tests
	$ NODE_ENV=test node server

	set NODE_ENV=test
	node server

	$ protractor

node-inspector

	https://github.com/node-inspector/node-inspector

	Node-inspector will only work on browsers that use the Blink
	engine, such as Google Chrome or Opera.

Debugging AngularJS with Batarang
	
	Batarang Models
	Batarang Performance
	Batarang Dependencies