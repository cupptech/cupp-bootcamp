/*
Object inheritance:
util.inherits() just connect prototypes, not object properties.
*/

var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Student() {
    Person.call(this);			// inherit object properties 
    this.studentid = '1234';
}

util.inherits(Student, Person);	// connect prototypes 
var student = new Student();
student.greet();