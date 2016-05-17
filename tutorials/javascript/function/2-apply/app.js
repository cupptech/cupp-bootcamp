// example of using f.apply

function ff(x, y, z) {
	this['x'] = x;
	this['y'] = y;
	this['z'] = z;
}

var obj = {};

ff.apply(obj, [7, 8, 9]);

console.log(obj);