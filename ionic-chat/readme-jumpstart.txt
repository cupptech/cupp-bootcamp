Ionic Framework: JumpStart

Section 1 - Course introduction
Lecture 1: Introduction

	Cloud9 

Lecture 2: Prerequisties
	
	HTML5, CSS3, JS
	Angular.js
	Sublime Text
	Ionic components, Tags, Classes and Syntaxes
	Ionic Cordova
	Android/iOS SDK on local machine
	Cloud9 Account

Lecture 3: Course Contents

	Node.js Socket.io and Angular.js with Ionic
	Setting up simple node.js server on Cloud9
	Debugging with Cloud9
	Create app interacts with the server
	Send and receive messages to and from the App
	Deploy server
	
Lecture 4: Basic Tools and Services
	
	Install node.js 0.12.7 
	git bash, download from git-scm.com  
	npm install ionic cordova -g 	
	c9.io, free account
	Sublime Text, editor 

Lecture 5: Course and Project Source Information

	The course of the finalized Ionic App is available as a Git Repository at
	https://github.com/samarthagarwal/chatAppIonic

	The server code is also available as a Git Repository at
	https://github.com/samarthagarwal/chatAppC9Server

Section 2 - Getting Started
Lecture 6: Setting up Ionic project

	ionic start ChatApp blank  // create a new ionic app
	www 	// working on 'www' directory
	ionic serve --l 	// show app on browser 
	
Lecture 7: States and Navigation
	
	create folder: templates
		login.html
		chat.html

	index.html
		<ion-nav-view><ion-nav-view>

	app.js
	.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'templates/login.html'
		})
		.state('chat', {
			url: '/chat',
			templateUrl: 'templates/chat.html'
		})
	$urlRouterProvider.otherwise('/login');
	
	ionic serve // show only one screen 
	
Lecture 8: Creating the Login page
	login.html
		paste html content here

		<ion-view ng-controller="LoginController">
	
	app.js
		LoginController
		
Lecture 9: Creating the Chat page

	chat.html
		<ion-view ng-controller="ChatController">
		ion-header-bar
		.bar-subheader
		ion-content
		div.bar-footer item-input-inset footer-item-input-inset  // create input field
		
		always close i tag
		

Lecture 10: States and State Parameters

	// passing data from one state to another 
	$state.go('chat', {
		nickname: nickname
	});

	url: '/chat/:nickname' 	
	
	ChatController
	$scope.nickname = $stateParams.nickname;
	
	
Section 3 - Getting started with the Server
Lecture 11: C9 and Nodejs

	Create free account on c9.io 

	Create a new workspace: chatapp
		template: node.js

	Project
		delete all content of chatapp folder	
		'New File': server.js
		
		npm -v
		npm init
		npm install express --save
		npm install socket.io  	// install very fast 

	https://chatapp-cupp.c9users.io/
			
Lecture 12: Writing the Basic Server Code

	server.js
	
	var express = require('express');
	var app = express();
	var server = require('http').createServer(app);
	
	var io = require('socket.io')().listen(server);  // using same server
	
	// cloud9: process.env.PORT
	server.listen(process.env.PORT, function(){
		console.log();
	});

	// run on console
	node server.js  // port: 8080
	

Section 4 - Getting Started with Socket.io
Lecture 13: Basic of Socket.io

	1. Emit Event
	2. Detect Emitted Event
	
	Client emit an event along with message, 
	server detects an emitted event and receives a message sent from a client,
	Server emits an event and sends a message to all the clients.
	Client detect an event and receive a message sent by the server.
	
	Sockiet.io
	- Predefined events: connect error disconnect
	- Name the events
	- Send the data along with the events

	
Lecture 14: Configuring Ionic to use Socket.io

	npm install bower -g 
	bower install angular-socket-io --save

	/socket.io/socket.io.js  // socket.io client lib, add to index.html 
	lib/angular-socket-io/socket.js
	module: btford.socket-io
	
	http://chat.socket.io//socket.io/socket.io.js
		copy the file to /lib/socket.io.js

	.factory('Socket', function(){
	
	Run app on c9, get public url
		io.connect(c9_url)

Lecture 15: Making First Communication over Socket.io

	ChatController 
		Socket  // Inject dependency, service will get created, make connnect to server 
		
	server.js 
		io.on("connection", function(socket){
			// a new client has connected.
			socket.on("disconnect", function(){
				// the client has disconnected 
			});
		});

	node.server
	
	watch the connection and disconnection messages.
		
		
Lecture 16: Sending and Receiving Messages

	Client side:
	
	ChatController:
		var data = {};
		Socket.on("connect", function(){
			Socket.emit("Message", data);
			$scope.scoketId = this.id; // socket unique id
		});
		Socket.on("Message", function(data){
			alert(data.message);
		});
	
	Server side:
		socket.on("Message", function(data){
			console.log();
			socket.emit("Message", {message: "Hello, client"});
		});
	
Lecture 17: socket.emit() versus io.emit()

	server.js
	socket.emit: send to specific user
	io.emit, send message to all users 

Lecture 18: Sending simple log messages

	chat.html
	<ion-content class="has-subheader">
		<ion-list class="list">
			<li ng-repeat="msg in messages" class="item item-avatar-left">
				<img src="profile_icon.png"/>
				{{msg.sender}}: {{msg.message}}
	
	ChatController
		$scope.messages = [];
 		
Lecture 19: Sending First Chat message
	
	chat.html
		send button
	
	ChatController

		var newMessage = {sender:'', message:''}
		Socket.emit('Message', newMessage);

Section 5 - Improving UI and UX
Lecture 20: Conditional Styling with Socket.Id

	chat.html
		Put socketId in message, users maybe have same name.
		ng-class="{name: expression}"
		
	ChatController
		$scope.scoketId = this.id, both server and client could get the id.
		
	style.css
		.item-avatar-right {}
		
Lecture 21: Styling Log Messages

	copy style.css
	
	isLog: true/false, log/chat message
	
	ng-hide="msg.isLog"

Lecture 22: Fixing Log Messages and Chat Bubbles
	
	.bubbleLeft 
	.bubbleRight  

Lecture 23: Sending Messages on Enter key press

	directive('ngEnter', function(){});
	
	event.which === 13 //enter
	
	scope.$eval(attrs.ngEnter);
	
	ng-enter="sendMessage()"
	

Section 6 - Adding the fun stuff
Lecture 24: Playing with Colors

	Assign color to each of user.
	Looking color, and know the user.
	
	Generate index based on the user name.
	
	app.js
	$scope.getUsernameColor = function(){}

Lecture 25: Auto scroll the ion-content

	$ionicScrollDelegate // service 
	
	<ion-content delegate-handle="mainScroll">
	scrollBottom
	
	has-footer class: fix the overlap problem.

	
Lecture 26: Adding Support for Emoticons :)

	fillWithEmoticons: replace with image.
		// (y) 
		message = message.replace(/\(y\(/g, "<img src='img/emoticons/1_01.png' width='20px' height='20px'>")
	
	module: ngSanitize
	data.message = $sce.trustAsHtml(data.message);
	ng-bind-html="msg.message" 
	
	css
	display: inline-block;
	max-width: 100%;
	
Lecture 27: Adding Sounds

	ngcordova.com, to play with sound, need to install ngCordova
	bower install ngCordova 
	cordova plugin add org.apache.cordova.media 
	
	$cordovaMedia // service
	
	playAudio
	if (ionic.Platform.isAndroid() || ionic.Platform.isIOS()){
		var newUrl = '';
		if (ionic.Platform.isAndroid()) {
			newUrl = "/android_asset/www/" + src;
		} else 
			newUrl = src;
			
		var media = new Media(newUrl, null, null, null); // callback is null 
		media.play();
	}else{
		new Audio(src).play();	// web browser
	}
	
	ionic serve  // test using web browser
		open two browsers 

		
Lecture 28: Testing Sounds on Emulator

	ionic serve --l   iOS / Android
		Media is not defined
	
	ionic run
		Install app on emulator, or device 
		could hear sound 

Lecture 29: "User is Typing..." message

	sub-header: show status_message 
	
	var TYPING_TIMER_LENGTH = 2000;    
	$scope.updateTyping = function(){}
	ng-change="updateTyping()"

Lecture 30: Customizations using CSS

	images.google.com
	subtlepatterns.com
	
	www/img/chat_bg/
	
	<ion-content id="chat_bg" 
	
	#chat_bg{
		background-image: url('../img/chat_bg.png')
	}
	
	.item{
		background-color: transparent !important;
		border: none !important;
		padding-top: 4px !important;
		padding-bottom: 4px !important; 
	}
	
	#login_bg
	
Section 7: Login with Facebook
Lecture 31: Adding a Login with Facebook button 

	app.js
		$scope.displayPicture
		
	login.html
		button.ion-social-facebook
			ng-click="loginWithFacebook()"
		
Lecture 32: Creating a Facebook App

	ngCordova 
		$cordovaOauth
		
	cordova plugin add cordova-plugin-inappbrowser
	
	https://developers.facebook.com
		login
		Add a new app: ChatApp
		App ID
 	
	app.js
		$cordovaOauth.facebook
		result.access_token  // get user data from facebook

	ionic serve --l (run in web browser)
	ionic run (deploy to device, elmulator)
	
	facebook login page
	ask for permission 

Lecture 33: Facebook Graph API and Access Token
	
	Get name and picture from facebook.

	Graph API, get user data from facebook
	Graph API Explorer: test api 
	
	http://graph.facebook.com/v2.4/me?fields=id,name,picture&access_token=xxx
	
Lecture 34: Getting User Data using the Access Token

	$http.get('graph_url')
	.success(function(data,status,header,config){   // promise
		$scope.user.fullName = data.name;
		$scope.user.displayPicture = data.picture.data.url;
		
	}, function(error){
		
	});

Lecture 35: Passing Data to Chat Controller and Displaying
	From login controller to chat controller:
	
	$state.go('chat',{nickname: $scope.user.fullName});
	
	.state 
		params: {data: null}    // pass JSON data 
		
Section 8 - Finalizing the Application
Lecture 36: Ionic Resources: Icon and Splash Screen

	resources/
		icon
		splash 
		// replace the files
	
	ionic resources // create image files for ios and andriod
		

Lecture 9 - Deploying to Azure Cloud Platform from C9
Lecture 37: Deploying to Azure Cloud Platform from C9

	c9 only for development, cannot use for long time.
	
	24x7, then need cloud service
	azure.microsoft.com (try for free)
	
	// create new web app
	COMPUTE -> WEB APP -> QUICK CREATE
	
	Setup deployment from source code:
	
	Local git repository
	npm init	// create package.json

	// deploy to azure 
	git init	// 
	git add .
	git commit -m "..."
	git remote add azure https://...   // azure git remote repository
	git push azure master  (username/password)
	
	server code deployed.
	
	client: io.connect();
	
	
	
	
	
