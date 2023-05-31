const EventEmitter = require('events');

// .on() is for binding the event
// .emit() is for starting/hitting the event

// Create an event emitter instance
const myEmitter = new EventEmitter();

// Register event handlers
myEmitter.on('start', () => {
  console.log('Application started');
});

myEmitter.on('request', (url) => {
  console.log(`Received request for ${url}`);
});

myEmitter.on('data', (data) => {
  console.log(`Received data: ${data}`);
});

myEmitter.on('error', (error) => {
  console.error(`Error occurred: ${error}`);
});

myEmitter.on('end', () => {
  console.log('Application ended');
});

// Emit various events
myEmitter.emit('start');
myEmitter.emit('request', '/users');
myEmitter.emit('data', 'Lorem ipsum dolor sit amet');
myEmitter.emit('error', 'File not found');
myEmitter.emit('end');
