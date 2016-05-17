// ES6 Typed Arrays

var buffer = new ArrayBuffer(8);  // 8 bytes
var view = new Int32Array(buffer);// 32 bits for one number
view[0] = 5;
view[1] = 15;
// view, work with buffer a easy way
console.log(view);
console.log(view[1]);
