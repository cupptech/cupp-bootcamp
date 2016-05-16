'use strict';

// Load the module dependencies
var config = require('./config'),
	cookieParser = require('cookie-parser'),
	passport = require('passport');

// Define the Socket.io configuration method
module.exports = function(server, io, mongoStore) {

	/*
	When a client wants to connect the Socket.io server, it will first send a handshake
	HTTP request. The server will then analyze the request to gather the necessary
	information for ongoing communication. It will then look for configuration
	middleware that is registered with the server and execute it before firing the
	connection event. 
	When the client is successfully connected to the server, the
	connection event listener is executed, exposing a new socket instance.

	Need to use persistent session storage to share session info between 
	the Express application and Socket.io handshake requests.
	*/

	// Intercept Socket.io's handshake request using a configuration middleware
	// The socket object is the same socket object that will be used for the connection
	io.use(function(socket, next){
		// Use the 'cookie-parser' module to parse the request cookies
		cookieParser(config.sessionSecret)(socket.request, {}, function(err){
			// Get the session id from the request cookies
			var sessionId = socket.request.signedCookies['connect.sid'];

			// Use the mongoStore instance to get the Express session information
			mongoStore.get(sessionId, function(err,session){
				// Set the Socket.io session information
				// socket.request: the handshake HTTP request
				socket.request.session = session;

				// Use Passport to populate the user details according to the session information
				// only authenticated users can open a socket communication with the server
				passport.initialize()(socket.request, {}, function() {
					passport.session()(socket.request, {}, function() {
						if (socket.request.user) {
							next(null, true);
						} else {
							// Socket.io will not initiate the socket connection 
							next(new Error('User is not authenticated'), false);
						}
					});
				});
			});
		});	
	});

	// Add an event listener to the 'connection' event
	io.on('connection', function(socket){
		// Load the chat controller
		require('../app/controllers/chat.server.controller')(io, socket);
	});
};