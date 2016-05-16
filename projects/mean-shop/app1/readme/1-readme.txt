Getting started with the MEAN Stack

## Installing NodeJS

	Install Node.js use NVM(Node Version Manager)

		$ node -v
		# v0.12.7

		$ npm -v
		# 2.11.3

	Installing ExpressJS

		npm install -g express@4.13.3
		express --version

	Installing MongoDB

		https://www.mongodb.org/downloads

	Installing AngularJS tools

		Yo generators: angular-fullstack / meanjs

		$ npm install -g generator-angular-fullstack@3.0.0-rc4
		$ mkdir app1 && cd $_

		# Execute the AngularJS scaffold
		$ yo angular-fullstack meanshop

		Check package.json, bower.json

	After the installation is complete, you can run the example app with these commands:

		# Build
		$ grunt

		# Preview the app in development mode
		$ grunt serve

		# Preview the app in production mode
		$ grunt serve:dist	

	You can preview the scaffolded app at: http://localhost:9000.

	The AngularJS debugger

		You can find more information about Batarang at https://github.com/angular/angularjs-batarang.

## Understanding the project structure

	There are three main directories:

		client:	contains the AngularJS files and assets 
		server:	contains the NodeJS files, which handle ExpressJS and MongoDB
		e2e: contain the AngularJS end-to-end tests

	The file structure:

		meanshop
		├── client
		│ ├── app - App specific components
		│ ├── assets - Custom assets: fonts, images, etc…
		│ └── components - Non-app specific/reusable components
		│
		├── e2e - Protractor end to end tests
		│
		└── server
		├── api - Apps server API
		├── auth - Authentication handlers
		├── components - App-wide/reusable components
		├── config - App configuration
		│ └── local.env.js - Environment variables
		│ └── environment - Node environment configuration
		└── views - Server rendered views	

		meanshop/client/app/main
		├── main.js - Routes
		├── main.controller.js - Controller
		├── main.controller.spec.js - Test
		├── main.html - View
		└── main.scss - Styles

		meanshop/server/api/thing
		├── index.js - ExpressJS Routes
		├── thing.controller.js - Controller
		├── thing.model.js - Database model
		├── thing.socket.js - SocketIO events
		└── thing.spec.js - Mocha Test

	Testing:

		AngularJS comes with a default test runner called Karma, and we are going to
		leverage its default choices:

		• Karma: This is the JavaScript unit test runner.
		• Jasmine: This is the BDD framework for testing the JavaScript code, which is
		executed with Karma.
		• Protractor: This is used for end-to-end tests with AngularJS. This is the
		highest level of testing, which runs in the browser and simulates user
		interactions with the app.

	Tools

		The following are some tools/libraries that we are going to use for increasing our
		productivity:
		• GruntJS: This tool serves to automate repetitive tasks such as CSS/JS
		minification, compilation, unit testing, and JS linting.
		• Yeoman (yo): This is a CLI tool for scaffolding web projects. It automates
		the creation of directories and files through generators, and also provides
		command lines for common tasks.
		• Travis CI: This is a Continuous Integration (CI) tool that runs your tests
		suite every time you commit to the repository.
		• EditorConfig: This is an IDE plugin, which loads the configuration from a
		file, .editorconfig. For example, you can set indent_size = 2, indents
		with spaces or tabs, and so on. It's a time saver and maintains consistency
		across multiple IDEs/teams.
		• SocketIO: This is a library that enables real-time bidirectional
		communication between the server and the client.
		• Bootstrap: This is a frontend framework for web development. We are going
		to use it for building the theme throughout this project.
		• AngularJS full-stack: This is the generator for Yeoman that will provide
		useful command lines to quickly generate server/client code and deploy to
		Heroku or OpenShift.
		• BabelJS: This is the js-tojs compiler that allows the use of features from
		the next generation JavaScript (ECMAScript 6) instantly, without waiting for
		browser support.
		• Git: This is a distributed code versioning control system.

	Package managers

		• NPM: This is the default package manager for NodeJS.
		• Bower: This is the frontend package manager that can be used to handle
		versions and dependencies of the libraries and assets used in a web project.
		The file bower.json contains the packages and versions to install, and the
		file .bowerrc contains the path for the location where those packages need
		to be installed. The default directory is ./bower_components.

## Previewing the final e-commerce app

• Homepage
• Marketplace
	This section will show all the products, categories, and search results.
• Backoffice		
	You need to be a registered user for accessing the back office section.
	After you log in, the app will present you with different options depending on your
	role. If you are the seller, you can create new products.
	If you are an admin, you can do everything that a seller does (create products), and
	you can manage all the users and delete/edit products.

## MVP Minimum Viable Product

• Add products with their title, price, description, photo, and quantity
• Guest checkout page for products
• One payment integration (for example, PayPal)

## Defining the requirements

User story:
	As a <role>, I want <desire> [so that <benefit>]



