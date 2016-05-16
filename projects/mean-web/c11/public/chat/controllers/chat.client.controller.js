'use strict';

// Create the 'chat' controller
angular.module('chat').controller('ChatController', ['$scope', 'Socket', 
	function($scope, Socket){
		// Create a messages array
		$scope.messages = [];

		// Add an event listener to the 'chatMessage' event
		Socket.on('chatMessage', function(message){
			$scope.messages.push(message);
		});

		// Sending messages
		$scope.sendMessage = function() {
			// Create a new message object
			var message = {
				text: this.messageText
			};

			// Emit a 'chatMessage' message event
			Socket.emit('chatMessage', message);

			// Clear the message text
			this.messageText = '';
		};

		// Remove the event listener when the controller instance is destroyed
		// the event handler will still get executed unless you remove it
		$scope.$on('$destroy', function(){
			Socket.removeListener('chatMessage');
		});
	}]);