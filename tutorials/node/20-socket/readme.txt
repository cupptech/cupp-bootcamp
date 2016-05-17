Listening for Socket Connections

	connect endpoints
	transmit information between them

Binding a Server to a TCP Port

	TCP socket connections consist of two endpoints. One endpoint binds to a numbered port while the other endpoint connects to a port.

	In Node.js, the bind and connect operations are provided by the net module.

	The net.createServer() method takes a callback function and returns a Server object. Node invokes the callback function whenever another endpoint connects. The connection parameter is a Socket object that you can use to send or receive data.

	Calling server.listen() binds the specified port.

Writing Data to a Socket
	
	This callback sends change information to the client using connection.write.

Connecting to a TCP Socket Server with Telnet

	Run the net-watcher program:
	$ node server.js target.txt 

	Use telnet to connect to server:
	$ telnet localhost 5432

	To trigger a change to the watched file:
	$ touch target.txt

Message-Boundary

	When develop networking programs in Node, In the best case, a message will arrive all at once. But sometimes messages will arrive in pieces, split into distinct data events.

	For instance:

	// send the first chunk immediately
	connection.write(
	    '{"type":"changed","file":"targ'
	);
	// after a one second delay, send the other chunk
	let timer = setTimeout(function(){
	    connection.write('et.txt","timestamp":1358175758495}' + "\n");
	    connection.end();
	}, 1000);