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