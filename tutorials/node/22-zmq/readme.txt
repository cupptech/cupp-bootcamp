ZeroMQ
	https://www.npmjs.com/package/zmq

	ZeroMQ provides high-scalability and low-latency messaging.

	ØMQ’s purpose is to expose high-level messaging patterns and take care of many low-level networking concerns for you.

		ØMQ endpoints automatically reconnect if they become unhitched for any reason.
		ØMQ delivers only whole messages, so you don’t have to create buffers to deal with chunked data.
		ØMQ’s low-overhead protocol takes care of many routing details, like sending responses back to the correct clients.

Installing the ØMQ Base Library

	libzmq: https://github.com/zeromq/libzmq

		git clone git://github.com/zeromq/libzmq.git
		cd libzmq
		./autogen.sh
		./configure && make check
		sudo make install
		sudo ldconfig

	Prerequisites

		sudo apt-get install uuid-dev
		sudo apt-get install libtool
		sudo apt-get install autotools-dev
		sudo apt-get install automake
		sudo apt-get install make
		sudo apt-get install pkg-config
		sudo apt-get install gcc g++

	To test whether ØMQ was installed successfully, you can try to load its man page with 'man zmq'.	

Installing the zmq Node Module

	$ npm install zmq

	To test that the module was installed successfully, run this command:

	$ node -p -e 'require("zmq")'

	The -e flag tells Node to evaluate the provided string, and the -p flag tells it to print that output to the terminal.