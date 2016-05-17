var Emitter = require('./emitter');

var emitter = new Emitter();

emitter.on('hello', function(){
    console.log('Hello Event Emitted.');
});

emitter.emit('hello');