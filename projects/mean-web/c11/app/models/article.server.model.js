'use strict';

// Load the module dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define a new Schema
var ArticleSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	}, 
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	content: {		// article content
		type: String,
		default: '',
		trim: true
	},
	// the DBRef is only an ObjectID reference to a real document
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

// Create the 'Article' model out of the 'ArticleSchema'
mongoose.model('Article', ArticleSchema);
