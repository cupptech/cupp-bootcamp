var express = require('express');
var router = express.Router({mergeParams:true});
var Event = require('../models/event');
var Comment = require('../models/comment');
var middleware = require('../middleware');

// COMMENTS ROUTES
// comments new
router.get('/new', middleware.isLoggedIn, function(req, res){
	//res.send('COMMENT FORM!');
	Event.findById(req.params.id, function(err, event){
		if (err) {
			console.log(err);
		} else {
			res.render('comments/new', {event: event});
		}
	});
});

// comments create
router.post('/', middleware.isLoggedIn, function(req, res){
	// lookup event using ID
	Event.findById(req.params.id, function(err, event){
		if (err) {
			console.log(err);
			res.redirect('/events');
		} else {
			Comment.create(req.body.comment, function(err, comment){
				if (err) {
					req.flash('error', 'Something went wrong.');
					console.log(err);
				} else {
					// add username and id to comment
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					// save comment
					comment.save();

					event.comments.push(comment);
					event.save();
					req.flash('success', 'Successfully added comment');
					res.redirect('/events/' + event._id);
				}
			});
		}
	});	
	// create new comment
	// connnect new comment to event
	// redirect event show page 
});

// COMMENT EDIT ROUTE
router.get('/:comment_id/edit', middleware.checkCommentOwnership, function(req, res){
	console.log('comment_id:' + req.params.comment_id);
	console.log('id:' + req.params.id);
	Comment.findById(req.params.comment_id, function(err, foundComment){
		if (err) {
			res.redirect('back');
		} else {
			res.render('comments/edit', {
				event_id: req.params.id,
				comment: foundComment
			});
		}
	});
});

// COMMENT UPDATE ROUTE
router.put('/:comment_id', middleware.checkCommentOwnership, function(req, res){
	Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
		if (err) {
			res.redirect('back');
		} else {
			res.redirect('/events/' + req.params.id);
		}
	});
});

// COMMENT DESTROY ROUTE
router.delete('/:comment_id', middleware.checkCommentOwnership, function(req, res){
	Comment.findByIdAndRemove(req.params.comment_id, function(err){
		if (err) {
			res.redirect('back');
		} else {
			req.flash('success', 'Comment deleted');
			res.redirect('/events/' + req.params.id);
		}
	});
});

module.exports = router;