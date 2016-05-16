'use strict';
/*
Grunt: 
	http://gruntjs.com/
	
	Grunt is a Node.js commandline-tool that uses custom and third-party tasks 
	to automate a project's build process
	
	automation of repetitive

	$ npm install -g grunt-cli

	grunt-env: lets developers set Node's environment variables

	$ grunt 

	$ node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update

	$ grunt test

	Running the debug grunt task
	$ grunt debug
	This will run your application in a debug mode and start the node-inspector server.
	http://127.0.0.1:8080/debug?port=5858
	

*/
// Define the Grunt configuration method
module.exports = function(grunt) {
	// Initialize Grunt configuration, to configure third-party tasks
	grunt.initConfig({
		// Configure the grunt-env task
		env: {
			test: {
				NODE_ENV: 'test'
			},
			dev: {
				NODE_ENV: 'development'
			}
		},
		// Configure the grunt-nodemon task
		// When Nodemon detects file changes, it automatically restarts the node server to update the application.
		nodemon: {
			// development environment configuration
			dev: {
				script: 'server.js',	// define the main script file
				options: {
					ext: 'js, html',	// watch both the HTML and JavaScript files
					watch: ['server.js', 'config/**/*.js', 'app/**/*.js']
				}
			},
			debug: {
				script: 'server.js',
				options: {
					nodeArgs: ['--debug'],	// start application in debug mode
					ext: 'js, html',
					watch: ['server.js', 'config/**/*.js', 'app/**/*.js']
				}
			}
		},
		// Configure the grunt-mocha-test task
		mochaTest: {
			src: 'app/tests/**/*.js',	// test files
			options: {
				reporter: 'spec'
			}
		},
		// Configure the grunt-karma task
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},
		// Configure the grunt-protractor-runner task
		protractor: {
			e2e: {
				options: {
					configFile: 'protractor.conf.js'
				},
			    singlerun: {},
			      auto: {
			        keepAlive: true,
			        options: {
			          args: {
			            seleniumPort: 4444
			          }
			        }
			    }
			}
		},
		// linting is the identification of suspicious code usage using dedicated tools 
		// help you avoid common and mistakes and coding errors
		// Configure the grunt-contrib-jshint task
		// lints JavaScript files
		jshint: {
			all: {
				src: ['server.js', 'config/**/*.js', 'app/**/*.js', 
					'public/js/*.js', 'public/modules/**/*.js'],
				options: {
					node: true,
					predef: [
						"define",
						"require",
						"exports",
						"module",
						"describe",
						"before",
						"beforeEach",
						"after",
						"afterEach",
						"it",
						"inject",
						"expect"
					]
				}
			}
		},
		// Configure the grunt-contrib-csslint task
		// lints CSS files
		csslint: {
			all: {
				src: 'public/modules/**/*.css'
			}
		},
		// Configure the grunt-contrib-watch task, with two subconfigurations
		// watch for file changes
		watch: {
			// watch the JavaScript files
			js: {
				files: ['server.js', 'config/**/*.js', 'app/**/*.js', 
					'public/js/*.js', 'public/modules/**/*.js'],
				tasks: ['jshint']
			},
			// watch the CSS files
			css: {
				files: 'public/modules/**/*.css',
				tasks: ['csslint']
			}
		},
		// Configure the grunt-concurrent task
		// run multiple Grunt tasks concurrently
		concurrent: {
			dev: {
				tasks: ['nodemon', 'watch'],
				options: {
					// log the console output of these tasks
					logConcurrentOutput: true
				}
			},
			debug: {
				tasks: ['nodemon:debug', 'watch', 'node-inspector'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		/*
		Node-inspector supports some pretty powerful debugging features:
		• Source code files navigation
		• Breakpoints manipulation
		• Stepping over, stepping in, stepping out, and resuming execution
		• Variable and properties inspection
		• Live code editing		

		When running node-inspector, it will create a new web server and attach to the running source code

		*/
		// Configure the grunt-node-inspector task
		'node-inspector': {
			debug: {}
		}
	});

	// Load the external Grunt tasks
	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-node-inspector');
	
	// Create the 'default' Grunt task
	grunt.registerTask('default', ['env:dev', 'lint', 'concurrent:dev']);

	// Create the 'debug' Grunt task
	grunt.registerTask('debug', ['env:dev', 'lint', 'concurrent:debug']);

	// Create the 'test' Grunt task
	grunt.registerTask('test', ['env:test', 'mochaTest', 'karma', 'protractor']);

	// Create the 'lint' Grunt task
	grunt.registerTask('lint', ['jshint', 'csslint']);

};