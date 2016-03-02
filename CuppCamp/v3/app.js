var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var mongoose 	= require('mongoose');
var seedDB 		= require('./seeds');
var Campground = require('./models/campground');

mongoose.connect('mongodb://localhost/cupp_camp');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

seedDB();

/*
var campgrounds = [
	{name: 'Camp 1', image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV'},
	{name: 'Camp 2', image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV'},
	{name: 'Camp 3', image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV'},
	{name: 'Camp 4', image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV'},
	{name: 'Camp 5', image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV'},
	{name: 'Camp 6', image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV'}
];
*/
app.get('/', function(req, res){
	res.render('landing');
});

// INDEX 
app.get('/campgrounds', function(req, res){
	// get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds){
		if (err) {
			console.log(err);
		} else {
			res.render('index', {
				campgrounds: allCampgrounds
			});
		}
	});
});

// CREATE
app.post('/campgrounds', function(req, res){
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name:name, image:image, description: desc};
	//campgrounds.push(newCampground);
	
	// create a new campground and save to db
	Campground.create(newCampground, function(err, newlyCreated){
		if (err) {
			console.log(err);
		} else {
			// redirect back to campgrounds page
			res.redirect('/campgrounds');
		}
	});
});

// NEW - show form
app.get('/campgrounds/new', function(req, res){
	res.render('new.ejs');
});

// SHOW - shows more info about one campground 
app.get('/campgrounds/:id', function(req, res){
	// find the campground with provided ID
	Campground.findById(req.params.id)
		.populate('comments')
		.exec(function(err, foundCampground){
			if (err) {
				console.log(err);
			} else {
				// render the campground
				res.render('show', {
					campground: foundCampground
				});
			}
		});
});

app.listen(3000, function(){
	console.log('The CuppCamp Server Has Started.');
});