var app = app || {};

$(document).ready(function(){

	// create a new app view, attach to the element
	app.appView = new app.AppView();

	// clear collection
	app.posts.reset(bootstrapPosts);

	// download posts from server, fire 'add' event
	// app.posts.fetch();

});