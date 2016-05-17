// Closures are functions that refer to variables from their parent environment.

function parent() {
	var message = 'Hello World';

	function child() {
		console.log(message);
	}

	return child;
}

var childFN = parent();

childFN();

/*
the child() function is called after the parent() function has already been executed.

A closure is not only the function, but also the environment in which
the function was created.

the childFN() is a closure object that consists
of the child() function and the environment variables that existed when the closure
was created, including the message variable.

Closures are very important in asynchronous programming because JavaScript
functions are first-class objects that can be passed as arguments to other functions.
*/