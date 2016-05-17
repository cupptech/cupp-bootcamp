function getLocation () {
	return new Promise(function (resolve, reject) {
		resolve('Toronto');
	});
}

function getWeather (location) {
	return new Promise(function (resolve, reject) {
		resolve('It is 68 in ' + location + '!');
	});
}

getLocation().then(function (location) {
	return getWeather(location);
}).then(function (currentWeather) {
	console.log(currentWeather);
});