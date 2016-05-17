/*
node-mysql

	https://github.com/felixge/node-mysql
	A pure node.js JavaScript Client implementing the MySql protocol.
*/

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();

/*
From this example, you can learn the following:

	Every method you invoke on a connection is queued and executed in sequence.

	Closing the connection is done using end() which makes sure all remaining queries 
	are executed before sending a quit packet to the mysql server.
*/