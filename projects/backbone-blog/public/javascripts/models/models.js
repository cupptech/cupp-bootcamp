// set default value
var app = app || {};

// define basic model
// passing an object
app.PostModel = Backbone.Model.extend({
	idAttribute: '_id', // mongoose object id
	defaults: {
		title: '',
		content: '',
		posted: ''
	}
});

// define a post collection, specify model
app.PostCollection = Backbone.Collection.extend({
	model: app.PostModel,
	url: '/api'  	// access to server api
});

// create an instance of PostCollection
app.posts = new app.PostCollection();