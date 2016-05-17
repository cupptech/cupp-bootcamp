Event
	
	Something that has happened in our app that we can respond to.

libuv.org
	
	libuv is a multi-platform support library with a focus on asynchronous I/O.
	Asynchronous I/O made simple.
	while loop, when something is done, then callback
	Send request to OS
	OS response JavaScript Event, then put to Event Queue
	Event loop: Callback to JavaScript, after other execution done

Javascript is Synchronous

	Asynchronous
		More than one process running simultaneously.
		NodeJS is asynchronous.

	Synchronous
		One process executing at a time.
		JavaScript is synchronous. Think of it as only one line of code executing at a time.

Event Driven and Non-blocking I/O

	Callback
		A function passed to some other function, which we assume will be invoked at some point.

	Non-blocking
		Doing other things without stopping your programming from running.
		This is made possible by Node's doing things asynchronously.

Node.js

	Event Driven
	Non-blocking I/O
	V8 engine
	Asynchronous