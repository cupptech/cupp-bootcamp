var express = require('express');
var router = express.Router();
var Post = require('../models/post');

// base url: '/api'
router.get('/', function(req, res){
	// query all posts
	Post.find({}, function(err, docs){
		res.send(docs);
	});
});

router.post('/', function(req, res){
	var newPost = new Post(req.body); // Backbone send data to server automatically
	newPost.save(function(err, doc){
		res.send(doc);
	});
});

router.delete('/:id', function(req, res){
	var postId = req.params.id;
	Post.remove({_id: PostId}, function(){
		res.send('success');
	});
});

module.exports = router;  // expose all the routes defined on the router