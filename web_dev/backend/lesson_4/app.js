const { name } = require("ejs");
const express = require("express");
const methodOverride = require("method-override");

const app = express();

/**
 * GET
 * POST
 * PUT
 * PATCH
 * DELETE
 */

// Template Engine

app.set("view engine", "ejs");
// app.set("views", "views");

// app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
// app.use(express.json());

// Rest API - Mobile App, Web App, Desktop App etc.
// REST API - Representational State Transfer
// CRUD - Create, Read, Update, Delete

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    name: "John Doe",
    friends: ["Alice", "Bob", "Charlie"],
  });
});

app.get("/users", (req, res) => {
  res.render("users", {
    title: "Users",
    users: users,
  });
});

app.post("/users", (req, res) => {
  console.log(req.body);
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.redirect("/users");
});

app.delete("/users/:id", (req, res) => {
  console.log("DELETE request received");
  users.filter((user) => user.id !== parseInt(req.params.id));
  console.log(users);
  res.redirect("/users");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
