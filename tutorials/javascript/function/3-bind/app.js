// example of bind
// Example of using Function.prototype.bind with default argument

function ff(x) {
	this.p = x;
}

var bb = {b: 2};

var gg = ff.bind(bb, 7);

gg();

console.log( bb );

