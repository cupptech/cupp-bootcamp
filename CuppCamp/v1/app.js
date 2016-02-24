var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
	{name: 'Camp 1', image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV'},
	{name: 'Camp 2', image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV'},
	{name: 'Camp 3', image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV'},
	{name: 'Camp 4', image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV'},
	{name: 'Camp 5', image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV'},
	{name: 'Camp 6', image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV'}
];

app.get('/', function(req, res){
	res.render('landing');
});

app.get('/campgrounds', function(req, res){
	res.render('campgrounds', {
		campgrounds: campgrounds
	});
});

app.post('/campgrounds', function(req, res){
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name:name, image:image};
	campgrounds.push(newCampground);
	// redirect back to campgrounds page
	res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res){
	res.render('new.ejs');
});

app.listen(3000, function(){
	console.log('The CuppCamp Server Has Started.');
});