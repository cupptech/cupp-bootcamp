/*
Asynchronous programming

	event-driven

	non-blocking

	more than one process running simultaneously
*/
console.log('Hello world...');

function printInTwoSeconds (message) {
	setTimeout(function () {
		console.log(message);
	}, 2000);
}

printInTwoSeconds('Hello async!'); 
