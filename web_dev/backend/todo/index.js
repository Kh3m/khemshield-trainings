const express = require("express");

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

const PORT = 4100;

/**
 * Http verbs
 * GET    -     Reads
 * POST   -     Creates
 * PUT    -     Updates
 * PATCH  -     Updates specific fields
 * DELETE -     Deletes
 */

let todoList = [
  { id: "1", task: "Learn Node.js", completed: false },
  { id: "2", task: "Build an API", completed: false },
];

app.get("/todos", (req, res) => {
  res.status(200).json(todoList);
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: String(todoList.length + 1),
    task: req.body.task,
    completed: false,
  };

  todoList.push(newTodo);
  res.status(201).json({ data: newTodo });
});

app.put("/todos/:id", (req, res) => {
  const params = req.params;
  const body = req.body;

  const foundIndex = todoList.findIndex((item) => item.id === params.id);

  if (foundIndex < 0) {
    return res.status(404).json({
      message: "Item not found with id " + params.id,
    });
  }

  const item = todoList[foundIndex];

  const newData = {
    id: item.id,
    task: body.task,
    completed: body.completed,
  };

  todoList[foundIndex] = newData;

  res.json({ data: todoList[foundIndex] });
});

app.patch("/todos/:id", (req, res) => {
  const params = req.params;
  const body = req.body;

  const foundIndex = todoList.findIndex((item) => item.id === params.id);

  if (foundIndex < 0) {
    return res.status(404).json({
      message: "Item not found with id " + params.id,
    });
  }

  const item = todoList[foundIndex];

  const newData = {
    id: item.id,
    ...todoList[foundIndex],
    ...body,
  };

  todoList[foundIndex] = newData;

  res.json({ data: todoList[foundIndex] });
});

app.get("/todos/:id", (req, res) => {
  const params = req.params;

  const foundIndex = todoList.findIndex((item) => item.id === params.id);

  if (foundIndex < 0) {
    return res.status(404).json({
      message: "Item not found with id " + params.id,
    });
  }

  const item = todoList[foundIndex];

  res.json({ data: item });
});

app.delete("/todos/:id", (req, res) => {
  const params = req.params;

  const foundIndex = todoList.findIndex((item) => item.id === params.id);

  if (foundIndex < 0) {
    return res.status(404).json({
      message: "Item not found with id " + params.id,
    });
  }

  const todos = todoList.filter((item) => item.id !== params.id);

  const item = todoList[foundIndex];

  todoList = todos;

  res.json({ data: item });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
