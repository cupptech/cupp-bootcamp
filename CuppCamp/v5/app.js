var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var mongoose 	= require('mongoose');
var seedDB 		= require('./seeds');
var Campground 	= require('./models/campground');
var Comment 	= require('./models/comment');

mongoose.connect('mongodb://localhost/cupp_camp');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

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
			res.render('campgrounds/index', {
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
	res.render('campgrounds/new');
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
				res.render('campgrounds/show', {
					campground: foundCampground
				});
			}
		});
}); 

// COMMENTS ROUTES
app.get('/campgrounds/:id/comments/new', function(req, res){
	//res.send('COMMENT FORM!');
	Campground.findById(req.params.id, function(err, campground){
		if (err) {
			console.log(err);
		} else {
			res.render('comments/new', {campground: campground});
		}
	});
});

app.post('/campgrounds/:id/comments', function(req, res){
	// lookup campground using ID
	Campground.findById(req.params.id, function(err, campground){
		if (err) {
			console.log(err);
			res.redirect('/campgrounds');
		} else {
			Comment.create(req.body.comment, function(err, comment){
				if (err) {
					console.log(err);
				} else {
					campground.comments.push(comment);
					campground.save();
					res.redirect('/campgrounds/' + campground._id);
				}
			});
		}
	});	
	// create new comment
	// connnect new comment to campground
	// redirect campground show page 
});

app.listen(3000, function(){
	console.log('The CuppCamp Server Has Started.');
});