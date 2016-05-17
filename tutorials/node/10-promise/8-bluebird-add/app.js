var Promise = require('bluebird');

var str = "hello";

function add1(callback){
	setTimeout(function(){
		str += 1;
		callback(null);
	},300);
};

function add2(callback){
	setTimeout(function(){
		str += 2;
		callback(null);
	},200);
};

function add3(callback){
	setTimeout(function(){
		str += 3;
		callback(null);
	},100);
};

var p1 = Promise.promisify(add1);
var p2 = Promise.promisify(add2);
var p3 = Promise.promisify(add3);

p1()
.then(function(){
	return p2();	
})
.then(function(){
	return p3();	
})
.then(function(){
	console.log(str);
}).catch(function(err){
	console.log(err);
});


/*add1(function(err, data){
	if (err) {
		console.log(err);
	} else {
		add2(function(err, data){
			if (err) {
				console.log(err);
			} else {
				add3(function(err, data){
					if (err) {
						console.log(err);
					} else {
						console.log(str);
					}
				});
			}
		});
	}
});*/


/*
var str = "hello";

function add1(){
	setTimeout(function(){
		str += 1;
	},300);
};

function add2(){
	setTimeout(function(){
		str += 2;
	},200);
};

function add3(){
	setTimeout(function(){
		str += 3;
	},100);
};

add1();
add2();
add3();

setTimeout(function(){
	console.log(str);
},1000);
*/