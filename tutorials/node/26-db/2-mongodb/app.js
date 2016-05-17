/*
NoSQL

	A variety of technologies that are alternatives to tables and SQL.

	One of those types is a document database. MongoDB is one of those.

MongoDB

	https://www.mongodb.org/

mongoose

	elegant mongodb object modeling for node.js

http://mongoosejs.com/

	Mongoose provides a straight-forward, schema-based solution to model your application data. 
	It includes built-in type casting, validation, query building, business logic hooks and more, 
	out of the box.
*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});