Creating a blog with Backbone, Express, and MongoDB

BackboneJS
	- Client side MVC
	- Models, Collections, Views
	- Built for persistence, save on model, post data to server

	Client: Backbone, Underscore, jQuery
	Server: Node, Express, Mongoose

Scaffolding Backbone Blog

	express (scaffolding project)
	npm install
	npm install mongoose --save
	nodemon bin/www (make sure application is running)
	http://localhost:3000/

	layout.jade
		cdnjs.com
		https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js
		https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js
		https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min.js

	index.jade
		block content
		  #blog
		  	ul#posts

Setting up Backbone model

	public/javascripts/models/models.js  

Testing the model
	
	Access to chrome console:
		app
		app.posts
		var newPost = new app.PostModel({title:'Hello World'})
		app.posts.add(newPost);
		app.posts.toArray();	// only contain the posts 

Adding a post view
	
	index.jade (create template) 
	  script#post-template(type="text/template").
	    <h3><%= title %></h3>

	javascripts/views/postView.js 

Setting up the blog view

	javascripts/views/appView.js 

Wiring it up to the page

	javascripts/app.js

	app.posts.add({title:'test'});  // add li to the page

Setting up the server

	app.js

	delete routes/users.js 

	create routes/api.js

	test:
	http://localhost:3000/api

Setting up the Database

	app.PostCollection = Backbone.Collection.extend({
		model: app.PostModel,
		url: '/api'  	// access to server api
	});

	app.js
	app.posts.fetch();

	http://localhost:3000/

	Test create on chrome console: 
	app.posts.create({title: 'From client', content: 'client content', posted: new Date()});
	- post data to server: http://localhost:3000/api
	- add data to posts list 

	api.js
		add route for post

	app.js
		var mongoose = require('mongoose');
		mongoose.connect('mongodb://localhost/backbone-blog');

	server model
	models/post.js

Connecting to the Database

	Test create on chrome console: 
	app.posts.create({title: 'From client', content: 'client content', posted: new Date()});
	- post request success
	- refresh page, works 

Adding new posts

	index.jade
		add form
		submit form, listen on page event, create post

Deleting Post
	add button to each of items to delete
	index.jade

	delete need id on Model
	idAttribute: '_id',
	http://localhost:3000/api/57313ca05c848b8c50aea394

	add delete route on server

Bootstrapping Data

	minimize the number http requests made 

	  script(type="text/javascript").
	    var bootstrapPosts = !{JSON.stringify(posts)};
	