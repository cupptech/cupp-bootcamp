var str = "hello";

var Q = require('q');

function add1(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			str += 1;
			resolve();
		},300);
	});
};

function add2(){
	var deferred = Q.defer();
	setTimeout(function(){
		str += 2;
		deferred.resolve();
	},200);
	return deferred.promise;
};

function add3(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			str += 3;
			resolve();
		},100);
	});
};

Q.fcall(add1)
.then(add2)
.then(add3)
.then(function(){
	console.log(str);
}).catch(function(err){
	console.log(err);
});

/*
add1().then(function(){
	return add2();
}).then(function(){
	return add3();
}).then(function(){
	console.log(str);
}).catch(function(err){
	console.log(err);
});
*/

