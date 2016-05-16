Basic Tools and Service

	Install node.js 0.12.7
	npm install ionic -g
	npm install cordova -g
	ionic -version  // 1.7.14
	cordova -v 		// 6.1.1

Setting up Ionic project
	
	ionic -h
	ionic start ChatApp blank   // create a new ionic app
	ionic serve --l 			// start a local development server for app dev/testing
	http://localhost:8100/ionic-lab

C9 and Node.js

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

Configuring Ionic to use Socket.io

	.factory('Socket', function(socketFactory){
	  var myIoSocket = io.connect('https://chatapp-cupp.c9users.io');

	  var mySocket = socketFactory({
	    ioSocket: myIoSocket
	  });

	  return mySocket;
	})		

Adding Sound

	bower install ngCordova 

	// cordova plugin add org.apache.cordova.media 

	https://github.com/apache/cordova-plugin-media
	cordova plugin add cordova-plugin-media

Creating a Facebook App

	625900327559647
	https://developers.facebook.com

	http://ngcordova.com/docs/plugins/facebook/

	https://github.com/nraboy/ng-cordova-facebook-example 
	
	ngCordovaOauth
	
		https://github.com/nraboy/ng-cordova-oauth

		$ bower install ng-cordova-oauth -S
		<script src="lib/ng-cordova-oauth/dist/ng-cordova-oauth.min.js"></script>

		You must use http://localhost/callback as your callback / redirect URI. This is because this library will perform tasks when this URL is found.

		As of Apache Cordova 5.0.0, the whitelist plugin must be used in order to reach external web services.

		This library will NOT work with a web browser, ionic serve, or ionic view. It MUST be used via installing to a device or simulator.


	cordova plugin add cordova-plugin-inappbrowser
	cordova plugin add cordova-plugin-whitelist

	ionic platform add ios [android]
	ionic emulate android

