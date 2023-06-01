// Creating a TCP server
const net = require('net');

const server = net.createServer((socket) => {
  // Socket connection handler
  console.log('New client connected');

  socket.on('data', (data) => {
    // Handle received data from the client
    console.log(`Received data from client: ${data}`);
  });

  socket.on('end', () => {
    // Handle socket connection end
    console.log('Client disconnected');
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Creating a TCP Client
const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
  // Connection established
  console.log('Connected to server');

  // Send data to the server
  client.write('Hello, server!');
});

client.on('data', (data) => {
  // Handle received data from the server
  console.log(`Received data from server: ${data}`);
});

client.on('end', () => {
  // Handle connection end
  console.log('Disconnected from server');
});




// Server-side code
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server1 = http.createServer(app);
const io = socketIO(server1);
app.get('/',(_,res) => {
    res.sendFile(__dirname + "/" + "index.html");
});

// Event listener for new client connections
io.on('connection', (socket) => {
  console.log('A new client has connected');

  // Emitting an event to the connected client
  socket.emit('welcome', 'Welcome to the server!');

  // Broadcasting an event to all clients except the sender
  socket.broadcast.emit('userJoined', 'A new user has joined');

  // Event listener for custom events from the client
  socket.on('chatMessage', (message) => {
    console.log(`Received message from client: ${message}`);
    // Broadcasting the received message to all clients
    io.emit('chatMessage', message);
  });

  // Joining and leaving rooms
  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log(`Client joined room: ${room}`);
  });

  socket.on('leaveRoom', (room) => {
    socket.leave(room);
    console.log(`Client left room: ${room}`);
  });

  // Emitting an event to all clients within a specific room
  socket.on('sendToRoom', (room, message) => {
    io.to(room).emit('messageToRoom', message);
  });

  // Event listener for client disconnection
  socket.on('disconnect', () => {
    console.log('A client has disconnected');
    // Broadcasting an event to all clients about the disconnected user
    socket.broadcast.emit('userLeft', 'A user has left');
  });
});

// Starting the server
server1.listen(3000);