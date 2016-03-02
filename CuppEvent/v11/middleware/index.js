var Event = require('../models/event');
var Comment = require('../models/comment');

// all the middleware goes here
var middlewareObj = {
};

middlewareObj.checkEventOwnership = function(req, res, next){
	// is user logged in 
	if (req.isAuthenticated()){ 
		Event.findById(req.params.id, function(err, foundEvent){
			if (err) {
				req.flash('error', 'Event not found.');
				res.redirect('back');
			} else {
				// does user own the event
				// foundEvent.author.id, mongoose Object
				// req.user._id: String
				if (foundEvent.author.id.equals(req.user._id)){
					next();
				} else {
					req.flash('error', 'You don\'t have permission to do that.');
					res.redirect('back');
				} 
			}
		});
	} else {
		req.flash('error', 'You need to be logged in to do that.');
		res.redirect('back'); 
	}
}

middlewareObj.checkCommentOwnership = function(req, res, next){
	// is user logged in 
	if (req.isAuthenticated()){ 
		Comment.findById(req.params.comment_id, function(err, foundComment){
			if (err) {
				res.redirect('back');
			} else {
				// does user own the event
				// foundComment.author.id, mongoose Object
				// req.user._id: String
				if (foundComment.author.id.equals(req.user._id)){
					next();
				} else {
					req.flash('error', 'You don\'t have permission to do that.');
					res.redirect('back');
				} 
			}
		});
	} else {
		req.flash('error', 'You need to be logged in to do that.');
		res.redirect('back');
	}
}

middlewareObj.isLoggedIn = function(req, res, next){
	if (req.isAuthenticated()) {
		return next();
	} 

	// show on the next page
	req.flash('error','You need to be logged in to do that!');
	res.redirect('/login');
}

module.exports = middlewareObj;