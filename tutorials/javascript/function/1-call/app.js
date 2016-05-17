// example of using f.call()

function ff() {
	return this;
}

var obj = {};

console.log(ff.call(obj) === obj);