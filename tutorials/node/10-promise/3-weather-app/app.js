var weather = require('./weather.js');
var location = require('./location.js');

location().then(function (loc) {
	return weather(loc.city);
}).then(function (currentWeather) {
	console.log(currentWeather);
}).catch(function (error) {
	console.log(error)
});

