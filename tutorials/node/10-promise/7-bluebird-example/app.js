var fs = require('fs');
var Promise = require('bluebird');

var readFile = Promise.promisify(fs.readFile);

readFile('test.txt', 'utf-8')
.then(function(data){
	console.log(data);
}).catch(function(err){
	console.log(err);
});

