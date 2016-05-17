Module
	A reusable block of code whose existence does not accidentally impact other code.

	Javascript didn't have this before.

Commonjs modules

	An agreed upon standard for how code modules should be structured.

module.exports and require

	- Module extensions: .js .json .node
	- 'require' is a function, that you pass a 'path' to
	- 'module.exports' is what the 'require' function returns
	- Read module file: fs.readFileSync(filename, 'utf8');
	- Compile module: create wrapper function, module code wrap in a function, 'module' and 'exports' passed as function parameters.
	- module cached, cache the result, require return same result
	- single object across application
	- Revealing module pattern: exposing only the properties and methods you want via an returned object. Protect contents.

exports vs module.exports

	- module return 'module.exports'
	- 'exports' is a local variable, could be overwrite
	- Just use 'module.exports'

