var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	title: String,
	posted: Date,
	content: String
});

var Post = mongoose.model('post', postSchema);
module.exports = Post;
