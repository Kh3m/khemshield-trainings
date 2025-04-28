import { createServer } from "http";

const availablePages = ["/", "love"];

const server = createServer((req, res) => {
  const url = req.url;

  //   if (url === "/") {
  //     res.statusCode = 200;
  //     res.setHeader("Content-Type", "text/plain");
  //     res.end("Hello World\n Welcome to my Index page");
  //   }

  //   if (url === "/love") {
  //     res.statusCode = 200;
  //     res.setHeader("Content-Type", "text/plain");
  //     res.end("HWelcome to the love page");
  //   }

  //   if (!availablePages.includes(url)) {
  //     res.statusCode = 404;
  //     res.setHeader("Content-Type", "text/plain");
  //     res.end("404 Not Found\n");
  //   }

  switch (url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello World\n Welcome to my Index page");
    case "/love":
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("404 Not Found\n");

    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("404 Not Found\n");
  }
});

const PORT = 5458;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:3000/${PORT}`);
});

// Comparison Operators ==, ===, !=, !==, >, <, >=, <=const
