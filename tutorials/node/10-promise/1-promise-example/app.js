// Promise could only resolve/reject once 
// Callback could be called multiple times

function doWork (shouldFail) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			if (typeof shouldFail === 'boolean' && shouldFail === true) {
				reject('error message');
			} else {
				resolve('success');
			}
		}, 1000);
	});
}

doWork(false).then(function (message) {
	console.log(message);
	return doWork(false);
}).then(function (message) {
	console.log(message);
}).catch(function (error) {
	console.log(error);
});
