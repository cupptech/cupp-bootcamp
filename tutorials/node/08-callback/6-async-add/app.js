var str = "hello";

var async = require('async');

function add1(callback){
	setTimeout(function(){
		str += 1;
		callback();
	},300);
};

function add2(callback){
	setTimeout(function(){
		str += 2;
		callback();
	},200);
};

function add3(callback){
	setTimeout(function(){
		str += 3;
		callback();
	},100);
};

// series(tasks, [callback])

async.series([add1, add2, add3], function(err, results){
	// console.log(results);
	console.log(str);
});

