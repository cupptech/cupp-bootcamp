var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var mongoose 	= require('mongoose');
var seedDB 		= require('./seeds');
var Event 	= require('./models/event');
var Comment 	= require('./models/comment');
var User 		= require('./models/user');
var passport 	= require('passport');
var LocalStrategy = require('passport-local');
var methodOverride = require('method-override');
var flash		= require('connect-flash');

// requiring routes 
var commentRoutes = require('./routes/comments');
var eventsRoutes = require('./routes/events');
var indexRoutes = require('./routes/index');

mongoose.connect('mongodb://localhost/cupp_event');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(flash());

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
	res.locals.error = req.flash('error');
	res.locals.success = req.flash('success');
	next();
});

app.use('/', indexRoutes);
app.use('/events', eventsRoutes);
app.use('/events/:id/comments',commentRoutes);

app.listen(3000, function(){
	console.log('The CuppEvent Server Has Started.');
});