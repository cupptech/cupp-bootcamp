The Two Phases of a Node Program

initialization phase

	In the initialization phase, the program is getting set up, bringing in libraries, reading configuration parameters, and doing other mission-critical tasks. If something goes wrong at this early stage, not much can be done, and it’s best to fail fast. The only time you should consider synchronous file access is during the initialization phase of your program.

	The require() function is an example of this principle in action—it synchronously evaluates the target module’s code and returns the module object. Either the module will successfully load, or the program will fail right away.

operation phase

	The second phase is the operation phase, when the program churns through the event loop. Since many Node programs are networked, this means accepting connections, making requests, and waiting on other kinds of I/O. You should never use synchronous file-access methods during this phase.

	