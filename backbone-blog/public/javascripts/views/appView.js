var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#blog', 			 // find existing element
	// map page events to methods
	events: {
		'submit #newpost': 'newPostSubmit'
	},
	initialize: function(){  // run then the view created
		console.log('initialize AppView...');
		this.listenTo(app.posts, 'add', this.addOne);
		this.listenTo(app.posts, 'reset', this.addAll);
	},
	addOne: function(post) {
		console.log('addOne...');
		var view = new app.PostView({
			model: post 	// attach model to view
		});

		// this.$() find element only in this el ('#blog')
		this.$('#posts').append(
			view.render().el 	// DOM element
		);
	},
	addAll: function(){
		this.$('#posts').empty();
		app.posts.each(this.addOne, this);
	},
	newPostSubmit: function(e){
		e.preventDefault();
		var attributes = {
			title: this.$('[name="title"]').val(),
			content: this.$('[name="content"]').val(),
			posted: new Date()
		};
		// create a new instance of model
		app.posts.create(attributes);

		//clear the form
		this.$('[type="text"]').val('');
	}
});