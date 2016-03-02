var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
	{
		name: 'Camp 1',
		image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},
	{
		name: 'Camp 2',
		image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},
	{
		name: 'Camp 3',
		image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
/*				Campground.create(seed, function(err, campground){
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
*/			});
		}
	});
}

module.exports = seedDB;
