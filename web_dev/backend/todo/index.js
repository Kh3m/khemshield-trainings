const express = require("express");

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

const PORT = 4100;
/**
 * Http verbs
 * GET - Reads
 * POST - Creates
 * PUT - Updates
 * PATCH - Updates specific fields
 * DELETE - Deletes
 */

const todoList = [
  { id: 1, task: "Learn Node.js", completed: false },
  { id: 2, task: "Build an API", completed: false },
];

app.get("/todos", (req, res) => {
  res.status(200).json(todoList);
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: todoList.length + 1,
    task: req.body.task,
    completed: false,
  };
  todoList.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
