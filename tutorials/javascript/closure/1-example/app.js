// Closures are functions that refer to variables from their parent environment.

function parent() {
	var message  = "Hello World";

	function child() {
		console.log(message);
	}

	child();
}

parent();

/*
In the preceding example, you can see how the child() function has access to a
variable defined in the parent() function.
*/
