const http = require("http");
const fs = require("fs");
const path = require("path");

// const lib = require("./lib");
// const sum = lib.add(33, 7);
// console.log("Sum: ", sum);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./templates/homepage.html", (err, data) => {
      if (err) {
        console.log("Error: ", err);
        return;
      }

      // res.statusCode = 200
      // res.setHeader("Content-Type", "text/html");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  }

  if (req.url === "/love") {
    res.write("Welcome to my LOVE page");
    res.end();
  }
});

server.listen(4000);
