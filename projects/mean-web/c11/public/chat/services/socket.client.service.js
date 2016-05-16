'use strict';

// Create the socket.io wrapper service
// service(): This is used to instantiate a new singleton object from the service
// function. You should use it when you're defining a service as a prototype.
angular.module('chat')
	.service('Socket', ['Authentication', '$location', '$timeout',
	function(Authentication, $location, $timeout){
		// Connect to the Socket.io server only when authenticate
		if (Authentication.user) {
			this.socket = io();
		} else {
			$location.path('/');
		}

		// Wrap the socket.io 'on' method
		this.on = function(eventName, callback) {
			if (this.socket) {
				this.socket.on(eventName, function(data) {
					// the socket client is a third-party library
					// using $timeout to take care of the binding issue of Angular
					$timeout(function(){
						callback(data);
					});
				});
			}
		};

		// Wrap the Socket.io 'emit' method
		this.emit = function(eventName, data) {
			if (this.socket) {
				this.socket.emit(eventName, data);
			}
		};

		// Wrap the Socket.io 'removeListener' method
		this.removeListener = function(eventName) {
			if (this.socket) {
				this.socket.removeListener(eventName);
			}
		};

	}]);