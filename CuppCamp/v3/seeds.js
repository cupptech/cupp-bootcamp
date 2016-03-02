var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
	{
		name: 'Camp 1',
		image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV',
		description: 'Camp 1 description'
	},
	{
		name: 'Camp 2',
		image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV',
		description: 'Camp 2 description'
	},
	{
		name: 'Camp 3',
		image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV',
		description: 'Camp 3 description'
	}
];

function seedDB(){
	// remove all campgrounds
	Campground.remove({}, function(err){
		if (err) {
			console.log(err);
		} else {
			console.log('removed campgrounds.');
			// add a few campgrounds
			data.forEach(function(seed){
				Campground.create(seed, function(err, campground){
					if (err) {
						console.log(err);
					} else {
						console.log('added a campground');
						// create a comment
						Comment.create({
							text: 'This place is great.', 
							author: 'John'
						}, function(err, comment){
							if (err) {
								console.log(err);
							} else {
								campground.comments.push(comment);
								campground.save();
								console.log('Created new comment');
							}
						});
					}
				});
			});
		}
	});
}

module.exports = seedDB;
