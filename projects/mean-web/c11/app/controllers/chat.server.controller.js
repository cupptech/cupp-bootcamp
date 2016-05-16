'use strict';

// Create the chat configuration
module.exports = function(io, socket) {

	// emit(): fire events between the server and client objects
	// Emit the status event when a new socket client is connected
	io.emit('chatMessage', {
		type: 'status',
		text: 'connected', 
		created: Date.now(),
		username: socket.request.user.username
	});

	// on(): binds event handlers with events
	// Send a chat message to all connected sockets when a message is received
	socket.on('chatMessage', function(message){
		message.type = 'message';
		message.created = Date.now();
		message.username = socket.request.user.username;

		// Emit the message to all connected socket clients
		io.emit('chatMessage', message);
	});

	// Emit the status event when a socket client is disconnected
	socket.on('disconnect', function() {
		io.emit('chatMessage', {
			type: 'status',
			text: 'disconnected',
			created: Date.now(),
			username: socket.request.user.username 
		});
	});
};