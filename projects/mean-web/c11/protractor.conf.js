'use strict';

// Define the Protractor configuration
exports.config = {
	specs: ['public/*[!lib]*/tests/e2e/*.js'],
	
	// The location of the selenium standalone server .jar file.
  	seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',

 	// The port to start the selenium server on, or null if the server should
  	// find its own unused port.
  	seleniumPort: null,
  	
  	// Chromedriver location is used to help the selenium standalone server
  	// find chromedriver. This will be passed to the selenium jar as
  	// the system property webdriver.chrome.driver. If null, selenium will
  	// attempt to find chromedriver using PATH.
  	chromeDriver: 'node_modules/protractor/selenium/chromedriver_2.21',

	capabilities: {
	    'browserName': 'chrome'
	}  	
}