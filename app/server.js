const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 4000;

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Middleware
app.use(bodyParser.json());

// In-memory store
let todos = [];
let idCounter = 1;

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Cloud ToDo App API!");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }
  const newTodo = { id: idCounter++, task, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== todoId);
  res.status(204).send();
});

// Update a todo (mark as completed or edit the task)
app.put("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const { task, completed } = req.body;

  // Find the todo by id
  const todo = todos.find((t) => t.id === todoId);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  // Update fields if provided
  if (task !== undefined) {
    todo.task = task;
  }
  if (completed !== undefined) {
    todo.completed = completed;
  }

  res.json(todo);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
