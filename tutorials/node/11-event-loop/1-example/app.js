'use strict';

var fs = require('fs');

fs.readFile('test.txt', 'utf-8', function(err, data){
	console.log('readFile data: ', data);
});

process.nextTick(function(){
	console.log('process nextTick');
});

setTimeout(function(){
	console.log('setTimeout 0');
},0);

setTimeout(function(){
	console.log('setTimeout 10');
},10);

setTimeout(function(){
	console.log('setTimeout 100');
},100);

setTimeout(function(){
	console.log('setTimeout 1000');
},1000);

setImmediate(function(){
	console.log('setImmediate');
});

