/*
Inheriting from EventEmitter
util.inherits() just connect prototypes, not object properties.
*/
var EventEmitter = require('events');
var util = require('util');

// Inherit everthing from EventEmitter.
function Greetr() {
    EventEmitter.call(this);        	// super constructor
    this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);	// connect prototypes 

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log('Someone greeted!: ' + data);
});

greeter1.greet('John');