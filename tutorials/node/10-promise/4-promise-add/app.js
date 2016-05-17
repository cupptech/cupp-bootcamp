var str = "hello";

function add1(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			str += 1;
			resolve();
		},300);
	});
};

function add2(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			str += 2;
			resolve();
		},200);
	});
};

function add3(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			str += 3;
			resolve();
		},100);
	});
};

add1().then(function(){
	return add2();
}).then(function(){
	return add3();
}).then(function(){
	console.log(str);
}).catch(function(err){
	console.log(err);
});


