'use strict';

// Load the 'hello' module
var hello = require('./hello');

// Use the 'hello' module sayHello() method
hello.sayHello();

/*
CommonJS modules

CommonJS is a project started in 2009 to standardize the way of working with
JavaScript outside the browser. The project has evolved since then to support a variety
of JavaScript issues, including the global namespace issue, which was solved through a
simple specification of how to write and include isolated JavaScript modules.

The CommonJS standards specify the following three key components when
working with modules:

• require(): This method is used to load the module into your code.
• exports: This object is contained in each module and allows you to expose
pieces of your code when the module is loaded.
• module: This object was originally used to provide metadata information
about the module. It also contains the pointer of an exports object as a
property. 
*/