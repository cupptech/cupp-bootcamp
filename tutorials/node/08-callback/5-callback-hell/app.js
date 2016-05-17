var str = "hello";

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

add1(function(err, data){
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
});


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