Node.js is an open-source, cross-platform runtime environment that allows developers to build server-side and networking applications using JavaScript.

Features of Node js:
1. `Asynchronous and Non-blocking`: Node.js follows an event-driven, non-blocking I/O model. This allows it to efficiently handle concurrent connections and I/O operations without blocking the execution of other tasks. As a result, Node.js can handle a large number of simultaneous connections with high performance.
2. `Single-Threaded Event Loop`: Node.js operates on a single thread and utilizes an event loop for handling I/O operations. The event loop enables efficient management of incoming requests, callbacks, and asynchronous operations. It eliminates the need for creating and managing separate threads for each request, making Node.js lightweight and scalable.
3. `JavaScript Everywhere`: Node.js enables developers to use JavaScript for both client-side and server-side development. This means that developers can use the same language and programming paradigms throughout the entire software stack, which can lead to increased productivity and code reuse.
4. `NPM (Node Package Manager)`: NPM is the default package manager for Node.js and is one of the largest software registries in the world. It provides access to a vast ecosystem of open-source libraries and modules that can be easily integrated into Node.js applications, enhancing development speed and efficiency.

# REPL
The REPL feature of Nodejs is useful in experimenting with Nodejs codes and to debug JS codes:
1. Read: Reads user's input, parses the input into JS data.
2. Eval: Takes and evaluates the data structure.
3. Print: Prints the result
4. Loop: Loops the above command until the user presses ctrl-c twice.

`require`: It is built-in function that is used to import modules and their functionality into your code. It allows you to access functions, objects, or variables defined in other modules, making them available for use in your application.

`createServer`: It is a method provided by the 'http' module. It allows you to create an HTTP server instance that can listen for incoming HTTP requests and respond to them.
```js
const http = require('http');

const server = http.createServer((req, res) => {
  // Handle incoming requests
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
```

# fs module
It is a built-in module that provides functionality for interacting with the file system. It allows you to read from and write to files, manipulate directories, and perform various file-related operations. The 'fs' module is part of the Node.js core, so you can use it without installing any additional dependencies.
1. Reading Files: fs.readFile(), fs.readFileSync()
2. Writing Files: fs.writeFile(), fs.writeFileSync()
3. Working with directories: fs.mkdir(), fs.mddirSync(), fs.readdir(), fs.readdirSync()
4. File Stats and Information: fs.stat(), fs.statSync()
5. File manipulation: fs.rename(), fs.renameSync(), fs.unlink(), fs.unlinkSync()

# Events and Callbacks
Event loop is a fundamental part of node architecture. It a mechanism that allows an event-driven non-blocking I/O model. The event loop enables NodeJS to handle multiple requests and perform I/O operations without blocking the execution of other code.

The event loop continuously check for new events or tasks in NodeJS and executes then in an asynchronous manner. It follows a specific cycle known as the event loop cycle.

`Events`: Events are a mechanism for signaling and handling occurrences or actions within a system or application. In NodeJS, events are typically implemented using the EventEmitter class, which allows you to create event emitters, bind event handlers to specific events, emit events, and manage event subscriptions. Events provide a way for different parts of your code to communicate and react to specific actions or states. Events can be emitted (triggered) by NodeJS include receiving an HTTP request, completing a database query, reading from a file, or a timer expiring.

To handle events, Node.js provides an event-driven architecture using the EventEmitter class. The EventEmitter class allows you to create instances of event emitters, bind event handlers to specific events, emit events, and manage event subscriptions.

`Callbacks`: Callbacks are functions that are passed as arguments to other functions and are invoked at a later point in time, typically when an asynchronous operation completes. Callbacks are used to handle the result or outcome of an asynchronous operation.

```js
const EventEmitter = require('events');

// Create an event emitter instance
const myEmitter = new EventEmitter();

// Register event handler with a callback function
myEmitter.on('event', (param1, param2) => {
  console.log('Event occurred with parameters:', param1, param2);
});

// Emit the event and pass parameters to the callback function
myEmitter.emit('event', 'Parameter 1', 'Parameter 2');
```

# EventEmitters
The EventEmitter class in NodeJS is a key component of hte event-driven architecture and provides an implementation of hte observer pattern. It allows objects to emit named events and register listeners to those events.
1. `on(eventName, listener)`: Registers a listener function to be called whenever the specified event is emitted. Equivalent to `addListener(eventName, listener)`.
2. `once(eventName, listener)`: Registers a one-time listener function that will be called only the first time the event is emitted. After the event is emitted and the listener is invoked, it is automatically removed.
3. `emit(eventName, [...args])`: Emits (triggers) the specified event, invoking all registered listeners with the provided arguments. Any additonal arguments after the event name are passed to the listeners.
4. `removeListener(eventName, listener)`: Removes the specified listener function from the listeners of the given event. If multiple listeners are registered with the same event and function, only one instance is removed. Equivalent to `off(eventName, listener)`
5. `removeAllListener([eventName])`: Removes all listeners for the specified event. If no event name is provided, it removes all listeners for all events.
6. `setMaxListeners(n)`: Sets the maximum number of listeners that can be registered for any event. By default, NodeJS allows a maximum of 10 listeners for each event. Use this method to increase or disable the limit.
7. `listeners(eventName)`: Returns an array of listener functions for the specified event.
8. `eventNames()`: Returns an array containing the names of all the events for which listeners are registered.
9. `listenerCount(emitter, event)`: Returns the number of listeners for a given event.

# Timer
There are several time-realted functions available for scheduling and managing the execution of code.
1. `setTimeout`: The setTimeout function is used to schedule the execution of a function or code block after a specified delay. It takes two arguments a callback function to be executed and a delay time in milliseconds. The function executes once after the specified delay and then completes.
2. `setInterval`: The setInterval function is used to repeatedly execute a function or code block at a specified interval. It takes two arguments a callback function to be executed and an interval time in milliseconds. The function continues to execute at the specified interval until it is canceled or the program is terminated.
3. `setImmediate`: The setImmediate function is used to schedule the execution of a function or code block in the next iteration of the event loop. It takes a callback function as an argument. The function executes immediately after the current phase of the event loop completes.

The clearTimeout and clearInterval functions are used to cancel a timer that was created using setTimeout or setInterval, respectively.
They take a timer object as an argument, which is the value returned by the original timer function.

# DNS
The dns module provides functionality for working with DNS (Domain Name System). The DNS module allows you to perform DNS-related operations such as domain name resolution, reverse IP address lookup, and hostname validation.

`dns.lookup()`: The lookup method is used to resolve a domain name (hostname) into an IP address. It takes two arguments: the domain name to be resolved and an optional options object.

`dns.reverse()`: The reverse method is used to perform a reverse IP address lookup, which resolves an IP address to a list of domain name (hostnames). It takes the IP address as a string as its argument.

`dns.resolve()`: The resolve method is used to perform various types of DNS queries. It takes three arguments: the domain name to be resolved, the query type (e.g., A, MX, TXT), and an optional options object.

# NET
The net module provides functionality for creating TCP servers and clients. It allows you to work with TCP (Transmission Control Protocol) sockets, enabling us to build network applications the communicate over TCP such as chat application.

`net.createServer()`: This method is used to create a TCP server. The callback function receives a socket object representing the connection to the client.

`server.listen()`: This method is used to start the TCP server and listen for incoming connections.

`socket.write()`: This method is used to send data to the connected client. It takes a string or a buffer as its argument.

`socket.on('data',callback)`: The data event is emitted when data is received from the client. It is commonly used to handle incoming data from the client.

`socket.on('clost',callback)`: The close event is emitted when the connection to the client is closed. It is used to perform cleanup or handle the closure of the connection.

# Crypto
This module provides cryptographic functionality, including encryption, decryption, hashing, and generating secure random numbers. It offers a wide range of cryptographic algorithms and operations to secure data in our application.

Hashing, Encryption and Decryption, Generating Random Values, Key Derivation

# TLS/SSL
TLS (Transport Layer Security) and SSL (Secure Sockets Layer) are cryptographic protocols used to establish secure and encrypted communication channels over a network. They are commonly used in web applications to secure the transmission of sensitive data between a client (such as a web browser) and a server.

# Debugger
It is a tool that helps developers identify and fix issues (bugs) in their code. It allows you to pause the execution of a program at specific points, inspect the state of variables, step through the code line by line, and analyze the program's behaviour.

# Buffers
The buffer class is used to handle binary data. It provides a way to interact with and manipulate binary data directly, without the need for encoding or decoding. Buffers are useful for handling binary data, such as file contents, network data, or cryptographic operations. They provide methods for efficient manipulation and conversion of binary data. Buffer class is a global class. It can be accessed in application without importing buffer module.

offset: It specifies the index of the buffer to start writing at.Its default value is 0.

1. Creating Buffers: Buffers can be created using various methods:
  1. `Buffer.alloc(size, fill, [encoding])`: Creates a new buffer to the specified size and optionally fills it with a specified value.
  2. `Buffer.from(array)`: Creates a new buffer from an array or array-like object.
  3. `Buffer.from(string, [encoding])`: Creates a new buffer from a string.
2. Writing and Reading Data: Buffers allow you to read from and write to specific positions within the buffer. Common methods include:
  1. `buffer.write(string, [offset, [length]], [encoding])`: Writes the specified string to the buffer at the specified offset.
  2. `buffer.toString([encoding, [start],[end])`: Converts the buffer data to a string.
  3. `buffer.slice([start],[end])`: Returns a new buffer that contains a portion of the original buffer.
3. Buffer Length and Size: The length of a buffer can be accessed using the `buffer.length` property. The allocated memory size of a buffer can be accessed using the `buffer.byteLength` method.
4. Buffer Conversion: Buffers can be converted to and from other data formats:
  1. `buffer.toString([encoding],[start],[end])`: Converts the buffer data to a string.
  2. `buffer.from(string,[encoding])`: Creates a new buffer from a string.
5. Buffer Operations: Buffers support various operations, such as copying, filling, and comparing:
  1. `buffer.copy(target,[targetStart],[sourceStart],[sourceEnd])`: Copies data from one buffer to another.
  2. `buffer.fill(value[, offset[, end]][, encoding])`: Fills the buffer with the specified value.
  3. `buffer.equals(otherBuffer)`: Compares two buffers for equality.
  4. `buffer.compare(otherBuffer)`: Compares two buffers and returns a number indicating their relative order.
6. Buffer and Streams: Buffers are commonly used in Node.js for handling data in streams and file I/O operations.

# Streams
Streams are a powerful concept for handling data flow. They provide an abstract interface for reading from or writing to a source of data in a continuous and efficient manner, allowing you to process large amounts of data with limited memory usage. Streams are used extensively in various scenarios, such as reading from or writing to files, network communication, and HTTP requests and responses.

NodeJS provides various types of streams, including readable streams, writable streams, and duplex streams (both readable and writable). 
1. `Readable Streams`: They represent a source of data that can be read sequentially. They emit data events when data is available and can be consumed using the read() method or by attaching a data event listener. Common examples of readable streams include reading from a file or receiving data over an HTTP request.
2. `Writable Streams`: Writable streams represent a destination where data can be written. They provide a write() method to write data to the stream. Writable streams emit drain events when the internal buffer is empty and ready to accept more data. Common examples of writable streams include writing to a file or sending data over an HTTP response.
3. `Duplex Streams`: Duplex streams represent streams that are both readable and writable. They can be used for bidirectional data flow. Duplex streams are typically created by combining a readable stream and a writable stream. Examples of duplex streams include network sockets and pipes.
4. `Transform Streams`: Transform streams are a special type of duplex streams. They allow data to be modified or transformed as it passes through the stream. Transform streams are commonly used for tasks such as data compression, encryption, or parsing.
5. `Piping Streams`: The fs.createReadStream('input.txt') reads data from the input.txt file, and the fs.createWriteStream('output.txt') writes the data to the output.txt file. The readableStream is piped to the writableStream using .pipe(), which automatically handles the data flow between the two streams.
6. `Chaining Streams (Compression)`: The fs.createReadStream('input.txt') reads data from the input.txt file. The data is then piped through zlib.createGzip() to compress it, and finally piped to fs.createWriteStream('output.txt.gz') to write the compressed data to the output.txt.gz file. This demonstrates how multiple streams can be chained together to perform sequential operations.
7. `Chaining Streams (Decompression)`: The fs.createReadStream('output.txt.gz') reads data from the output.txt.gz file, which contains the previously compressed data. The data is then piped through zlib.createGunzip() to decompress it, and finally piped to fs.createWriteStream('decompressed.txt') to write the decompressed data to the decompressed.txt file.

# Path
The path module in NodeJS provides utilities for working with file and directory paths. If offers methods to mnaipulate and transform file paths, resolve relative paths, extract file extensions, and more.
1. Joining Paths: path.join([...paths]): Joins multiple path segments together using the platform-specific separator and returns the resulting path. Example: path.join('/path', 'to', 'file.txt') returns '/path/to/file.txt'.
2. Resolving Paths: path.resolve([...paths]): Resolves an absolute path relative to the current working directory. Example: path.resolve('path', 'to', 'file.txt') returns the absolute path based on the current working directory.
3. Getting Directory and File Names: path.dirname(path): Returns the directory name of a path. Example: path.dirname('/path/to/file.txt') returns '/path/to'.
path.basename(path, [ext]): Returns the last portion of a path, optionally excluding the file extension. Example: path.basename('/path/to/file.txt') returns 'file.txt'.
4. File Extension Manipulation: path.extname(path): Returns the file extension of a path. Example: path.extname('/path/to/file.txt') returns '.txt'. path.parse(path): Returns an object with the individual components of a file path (root, dir, base, ext, name). Example: path.parse('/path/to/file.txt') returns { root: '/', dir: '/path/to', base: 'file.txt', ext: '.txt', name: 'file' }.
5. Normalizing Paths: path.normalize(path): Normalizes a path by resolving '.' and '..' segments. Example: path.normalize('/path/../file.txt') returns '/file.txt'.
6. Checking Path Existence: fs.existsSync(path): Checks if a file or directory exists at the specified path synchronously and returns a boolean value. Example: fs.existsSync('/path/to/file.txt') returns true or false depending on the existence of the file or directory.

# Global Objects
There are several global objects and varaibles available for use without requiring any explicit import or require statements. These global objects provide essential functionality and utilities that can be accessed from any module in your application.
1. `global`: The global object serves as the global namespace object in Node.js. It contains various global variables and functions accessible across modules.
2. `console`: The console object provides methods for printing messages to the console, such as console.log(), console.error(), console.warn(), etc. It is commonly used for debugging and logging information.
3. `process`: The process object provides information and control over the current Node.js process. It allows you to access command-line arguments, environment variables, exit the process, listen to process events, and more.
4. `Buffer`: The Buffer class is a global object that provides methods for working with binary data. It enables you to create, manipulate, and convert binary data in Node.js.
5. `require`: The require function is used to import modules in Node.js. It allows you to load external modules or built-in modules and use their functionality in your application.
6. `__dirname`: The __dirname variable represents the current directory name of the current module. It provides the absolute path of the directory containing the currently executing file.
7. `__filename`: The __filename variable represents the absolute path of the currently executing file.
8. `setTimeout()`: The setTimeout() function is a global function that allows you to schedule a callback function to be executed after a specified delay.
9. `setInterval()`: The setInterval() function is a global function that repeatedly calls a callback function with a fixed time delay between each invocation.
10. `clearTimeout()`: The clearTimeout() function is used to cancel a scheduled timeout created with setTimeout().
11. `clearInterval()`: The clearInterval() function is used to cancel a recurring interval created with setInterval().

# stringDecoder
The string_decoder module in Node.js provides a way to decode buffer objects into strings. It is useful when working with binary data that needs to be converted into a string using a specific character encoding. The StringDecoder class in the string_decoder module can be used to efficiently decode buffers into strings, especially when dealing with multi-byte character encodings.

# queryString
The querystring module in Node.js provides utilities for parsing and formatting URL query strings. It allows you to work with the query string parameters of a URL, parse them into key-value pairs, and format them back into a query string.

