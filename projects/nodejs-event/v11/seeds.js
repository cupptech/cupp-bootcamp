var mongoose = require('mongoose');
var Event = require('./models/event');
var Comment = require('./models/comment');

var data = [
	{
		name: 'Event 1',
		image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},
	{
		name: 'Event 2',
		image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},
	{
		name: 'Event 3',
		image: 'http://www.restaurantcolca.com/sites/default/files/styles/img_serviciobanner/public/camping2_0.jpg?itok=pE_mZlKV',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	}
];

function seedDB(){
	// remove all events
	Event.remove({}, function(err){
		if (err) {
			console.log(err);
		} else {
			console.log('removed events.');
			// add a few events
			data.forEach(function(seed){
/*				Event.create(seed, function(err, event){
					if (err) {
						console.log(err);
					} else {
						console.log('added a event');
						// create a comment
						Comment.create({
							text: 'This place is great.', 
							author: 'John'
						}, function(err, comment){
							if (err) {
								console.log(err);
							} else {
								event.comments.push(comment);
								event.save();
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
