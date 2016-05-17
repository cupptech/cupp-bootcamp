var fs = require('fs');

// load data to buffer, return string 
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// async callback 
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log(data);
});

// data is buffer, if there is no encoding specified
var greet3 = fs.readFile(__dirname + '/greet.txt', function(err, data) {
    console.log(data);
});

console.log('Done!');