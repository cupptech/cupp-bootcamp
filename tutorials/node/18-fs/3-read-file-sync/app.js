/*
Reading Files Synchronously:

When you use the *Sync methods, the Node.js process will block until the I/O finishes. 
This means Node won’t execute any other code, won’t trigger any callbacks, 
won’t process any events, won’t accept any connections—nothing. 
It’ll just sit there indefinitely waiting for the operation to complete.

Synchronous methods are simpler to use since they lack the callback step. 
They either return successfully or throw an exception, without the need for a callback function.
*/

var fs = require('fs');
// The return value of readFileSync() is a buffer—the same as the parameter passed to 
// callbacks of the asynchronous readFile() method.
var data = fs.readFileSync('test.txt');
process.stdout.write(data.toString());