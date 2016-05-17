Event loop

	Node js is a single threaded application but it support concurrency via concept of event and callbacks. As every API of Node js are asynchronous and being a single thread, it uses async function calls to maintain the concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever any task get completed, it fires the corresponding event which signals the event listener function to get executed.

Event Driven Programming

	Node.js uses events heavily and it is also one of the reasons why Node.js is pretty fast compared to other similar technologies. As soon as Node starts its server, it simply initiates its variables, delcares functions and then simply waits for event to occur.

	In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected.	

	While Events seems similar to what callbacks are. The difference lies in the fact that callback functions are called when an asynchronous function returns its result where as event handling works on the observer pattern. The functions which listens to events acts as Observers. Whenever an event gets fired, its listener function starts executing. Node.js has multiple in-built events available through events module and EventEmitter class which is used to bind events and event listeners as follows:

	// Import events module
	var events = require('events');

	// Create an eventEmitter object
	var eventEmitter = new events.EventEmitter();

	Following is the syntax to bind event handler with an event:

	// Bind event and even handler as follows
	eventEmitter.on('eventName', eventHandler);

	We can fire an event programatically as follows:

	// Fire an event 
	eventEmitter.emit('eventName');

Asynchronous 

	https://kikobeats.com/synchronously-asynchronous/

setTimeout 
	is simply like calling the function after delay has finished. Whenever a function is called it is not executed immediately, but queued so that it is executed after all the executing and currently queued eventhandlers finish first. setTimeout(,0) essentially means execute after all current functions in the present queue get executed. No guarantees can be made about how long it could take.

setImmediate 
	is similar in this regard except that it doesn't use queue of functions. It checks queue of I/O eventhandlers. If all I/O events in the current snapshot are processed, it executes the callback. It queues them immedieately after the last I/O handler somewhat like process.nextTick. So it is faster.

	Also (setTimeout,0) will be slow because it will check the timer at least once before executing. At times it can be twice as slow. Here is a benchmark.

process.nextTick(callback[, arg][, ...])

	Once the current event loop turn runs to completion, call the callback function.

	Note: the nextTick queue is completely drained on each pass of the event loop before additional I/O is processed. As a result, recursively setting nextTick callbacks will block any I/O from happening, just like a while(true); loop.