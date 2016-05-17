/*
How to create a closure:
	Define a function c.
	Declare some variables in c.
	Define a inner function f that use these variables.
	Return f in c.
	Now, call the outter function c and assign it to a variable like this: var g = c(); .
	This variable g is a function with closure.
*/
function myContext() {
	var x = 0;
	function f () {
		x += 1;
		return x;
	}
	return f;
}

// g is now function with closure
var g = myContext();

console.log(g());
console.log(g());
console.log(g());