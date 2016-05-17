// Keeping callbacks truly asynchronous

var fs = require('fs');

function getDataFromFile(cachedData, callback) {
	if (cachedData) {
		process.nextTick(function(){
			callback(cachedData);
		});
	} else {
		fs.readFile('test.txt', 'utf-8', function(err, data){
			callback(data);
		});
	}
}

getDataFromFile('test data', function(data){
	console.log('readFile data: ', data);
});

console.log('start...');
