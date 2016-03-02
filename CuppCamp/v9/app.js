var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var mongoose 	= require('mongoose');
var seedDB 		= require('./seeds');
var Campground 	= require('./models/campground');
var Comment 	= require('./models/comment');
var User 		= require('./models/user');
var passport 	= require('passport');
var LocalStrategy = require('passport-local');

// requiring routes 
var commentRoutes = require('./routes/comments');
var campgroundsRoutes = require('./routes/campgrounds');
var indexRoutes = require('./routes/index');

mongoose.connect('mongodb://localhost/cupp_camp');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require('express-session')({
	secret: 'this is a secret',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// middleware
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

app.use('/', indexRoutes);
app.use('/campgrounds', campgroundsRoutes);
app.use('/campgrounds/:id/comments',commentRoutes);

app.listen(3000, function(){
	console.log('The CuppCamp Server Has Started.');
});