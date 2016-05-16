var express = require('express');
var router = express.Router();
var Event = require('../models/event');
var middleware = require('../middleware');

// index route 
router.get('/', function(req, res){
	// get all events from DB
	Event.find({}, function(err, allEvents){
		if (err) {
			console.log(err);
		} else {
			res.render('events/index', {
				events: allEvents
			});
		}
	});
});

// CREATE 
router.post('/', middleware.isLoggedIn, function(req, res){
	// get data from form and add to events array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var author = {
		id: req.user._id,
		username: req.user.username
	};
	var newEvent = {
		name:name, 
		image:image, 
		description: desc,
		author: author
	};
	//events.push(newEvent);
	
	// create a new event and save to db
	Event.create(newEvent, function(err, newlyCreated){
		if (err) {
			console.log(err);
		} else {
			// redirect back to events page
			res.redirect('/events');
		}
	});
});

// NEW - show form
router.get('/new', middleware.isLoggedIn, function(req, res){
	res.render('events/new');
});

// SHOW - shows more info about one event 
router.get('/:id', function(req, res){
	// find the event with provided ID
	Event.findById(req.params.id)
		.populate('comments')
		.exec(function(err, foundEvent){
			if (err) {
				console.log(err);
			} else {
				// render the event
				res.render('events/show', {
					event: foundEvent
				});
			}
		});
}); 

// EDIT EVENT ROUTE
router.get('/:id/edit', middleware.checkEventOwnership, function(req, res){
	Event.findById(req.params.id, function(err, foundEvent){
		res.render('events/edit', {
			event: foundEvent
		});
	});
});

// UPDATE EVENT ROUTE
router.put('/:id', middleware.checkEventOwnership, function(req, res){
	// find and update the correct event
	console.log(req.body.event);
	Event.findByIdAndUpdate(req.params.id, req.body.event, function(err, updatedEvent){
		if (err) {
			res.redirect('/events');
		} else {
			res.redirect('/events/' + req.params.id);
		}
	});
});

// DESTROY EVENT ROUTE
router.delete('/:id', middleware.checkEventOwnership, function(req, res){
	Event.findByIdAndRemove(req.params.id, function(err){
		if (err) {
			res.redirect('/events');
		} else {
			res.redirect('/events');
		}
	});
});



module.exports = router;
