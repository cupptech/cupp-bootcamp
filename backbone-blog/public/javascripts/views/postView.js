var app = app || {};

// view for post
app.PostView = Backbone.View.extend({
	tagName	: 'li', 	// each view attach to 'li' element
	template: _.template( $('#post-template').html() ),		// use underscore to compile template
	events: {
		'click .delete': 'deletePost'	// method attached to this object
	},
	initialize: function(){
		this.listenTo(this.model, 'destroy', this.remove); // remove view from list
	},
	// called when the post is rendered
	render: function(){
		this.$el.html(this.template(
			this.model.toJSON()
		));
		return this;	// method chaining 		
	}, 
	deletePost: function(){
		this.model.destroy(); // delete from local collection, all make a delete call to server
	}

});