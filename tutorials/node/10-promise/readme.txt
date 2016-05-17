Why use Promises?

	Promise is relatively an easy implementation for asynchronous operation. The promise object returned from the function represents an operation which is not completed yet, but it guarantees to the caller of the operation that the operation will be completed in future.

Moving to Promises from Callback

	To solve the complexity of the pseudo code, we can make use of promises. In simple words, a promise is an abstraction which allows an asynchronous function to return an object known as promise. This object is eventually a result of the operation. Promise has the following states:

		· Pending - asynchronous operation is not yet completed.

		· Fulfilled - asynchronous operation is completed successfully.

		· Rejected - asynchronous operation is terminated with an error.

		· Settled - asynchronous operation is either fulfilled or rejected.

		· Callback - function is executed if the promise is executed with value.

		· Errback - function is executed if the promise is rejected.

	The promise object provides then() function with two parameters for fulfillment and rejection as shown in the following syntax:

		promise.then([onFulfilled],[onRejected])

		onFulfilled and onRejected are called when the promise is resolved. This means that the asynchronous operation is completed.

To implement Promises in Node.js, we have several libraries.

	Bluebird: This is a popular library for implementing promises in Node.js. This provides APIs for performing promisification. This means that it converts standard non-promise aware APIs to promise returning APIs.  
	http://bluebirdjs.com/docs/getting-started.html
	npm install bluebird

	Q: This is another popular library for implementation of promises in Node.js. This library provides an easy approach of then().catch() functions for using promises. 
	https://github.com/kriskowal/q
	npm install q