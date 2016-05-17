/*
Use process.nextTick() to defer the emit till the listener has had the chance to listen for the event.
*/
var EventEmitter = require('events');
var util = require('util');

// Inherit everthing from EventEmitter.
function Greetr() {
    EventEmitter.call(this);        	// super constructor
    this.greeting = 'Hello world!';

    var self = this;
    process.nextTick(function(){
	    self.emit('start');
    });
}

util.inherits(Greetr, EventEmitter);	// connect prototypes 

Greetr.prototype.greet = function(data) {
    // console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('start', function(){
	console.log('Greetr started...');
});

greeter1.on('greet', function(data) {
    console.log('Someone greeted!: ' + data);
});

setImmediate(function(){
	greeter1.greet('John');
});
