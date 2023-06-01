// implement a restful API in NodeJs using express that allows users to create, read, updata, and delete (CRUD) items in a todo list.

// Sample implementation using express and in-memory data storage
const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Create a new todo
app.post('/todos', (req, res) => {
    res.json(todos);
});

// Create a new todo
app.post('/todos', (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).json(todo);
});

// Updat a todo
app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const updatedTodo = req.body;
    todos[id] = updatedTodo;
    res.json(updatedTodo);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    todos.splice(id, 1);
    res.sendStatus(204);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});