var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
	// bootstrapping data when page load
	Post.find({}, function(err, docs){
		res.render('index', {
			title: 'Express',
			posts: docs
		})
	});
/*
  	res.render('index', { 
  		title: 'Express' 
  	});
*/
});

module.exports = router;
