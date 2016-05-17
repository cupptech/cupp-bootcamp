/*
A callback function is called at the completion of a given task. 

For example, a function to read a file may start reading file and return the control 
to execution environment immidiately so that next instruction can be executed. 
Once file I/O is complete, it will call the callback function while passing the callback function, 
the content of the file as parameter. So there is no blocking or wait for File I/O. 
This makes Node.js highly scalable, as it can process high number of request 
without waiting for any function to return result.
*/

// callback example 
function greet(callback) {
	console.log('Hello!');
	var data = {
		name: 'John Doe'
	};
	
	callback(data);
}

greet(function(data) {
	console.log('The callback was invoked!');
	console.log(data);
});

greet(function(data) {
	console.log('A different callback was invoked!');
	console.log(data.name);
});