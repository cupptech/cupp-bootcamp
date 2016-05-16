'use strict';

// Load the module dependencies
var config = require('./config'),
	http = require('http'),
	socketio = require('socket.io'),
	express = require('express'),
	// This is an HTTP request logger middleware.
	morgan = require('morgan'),
	// Used to compress the response data using gzip/deflate
	compress = require('compression'),
	// This is a body-parsing middleware that is used to parse the request body
	bodyParser = require('body-parser'),
	// This is a middleware that provides HTTP verb support
	// such as PUT or DELETE in places where the client doesn't support it.
	methodOverride = require('method-override'),
	// This is a session middleware used to support persistent sessions
	session = require('express-session'),
	// store session information
	MongoStore = require('connect-mongo')(session),
	flash = require('connect-flash'),
	// Passport is a Node.js module that uses the middleware design pattern to authenticate requests.
	passport = require('passport');

// Define the Express configuration method
module.exports = function(db) {
	// Create a new Express application instance
	var app = express();

	// Create a new HTTP server
	var server = http.createServer(app);

	// Create a new Socket.io server to interact with socket clients
	// The 'server' object will serves both the Express application and the Socket.io server
	var io = socketio.listen(server);

	// Windows: set NODE_ENV=development
	// Unix-based: export NODE_ENV=development
	// Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
	if (process.env.NDOE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NDOE_ENV === 'production') {
		app.use(compress());
	}

	// Use the 'body-parser' and 'method-override' middleware functions
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(methodOverride());

	// Configure the MongoDB session storage
	var mongoStore = new MongoStore({ db: db.connection.db });

	// Configure the 'session' middleware
	// The express-session module will use a cookie-stored, signed identifier to identify the current user.
	// To sign the session identifier, it will use a secret string, 
	// 		which will help prevent malicious sessiontampering.
	// For security reasons, it is recommended that the cookie secret be different for each environment
	// The 'session' middleware adds a 'session' object to all request objects
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret,
		store: mongoStore
	}));

	// Set the application view engine and 'views' folder
	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	// Configure the flash messages middleware
	// This will tell your Express application to use Connect-Flash and create the new
	// flash area in the application session.
	// The Connect-Flash module exposes the req.flash() method,
	// which allows you to create and retrieve flash messages.
	app.use(flash());

	// Configure the Passport middleware
	app.use(passport.initialize());	// bootstrapping the Passport module
	app.use(passport.session());	// using the Express session to keep track of your user's session

	// Load the routing files
	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/users.server.routes.js')(app);
	require('../app/routes/articles.server.routes.js')(app);

	// Configure static file serving
	// Should placed below the call for the routing file,
	// Otherwise Express would first try to look for HTTP request paths in the static files folder.
	// Make the response a lot slower as it would have to wait for a filesystem I/O operation.
	app.use(express.static('./public'));

	// Load the Socket.io configuration
	require('./socketio')(server, io, mongoStore);

	// Return the Server instance
	return server;
}; 