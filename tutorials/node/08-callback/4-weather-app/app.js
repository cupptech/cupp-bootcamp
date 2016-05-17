var weather = require('./weather.js');
var location = require('./location.js');

location(function (location) {
	console.log('The location is: ', location.city);
	if (location) {
		weather(location.city, function (currentWeather) {
			console.log(currentWeather);
		});
	} else {
		console.log('Unable to guess location');
	}
});


