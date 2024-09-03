const digitToWord = require("digit-to-word-converter");
const http = require("http");
const fs = require("fs");
const { log } = require("console");

const server = http.createServer((req, res) => {
  log("Request has been made.");
  res.setHeader("Content-Type", "text/html");
  log(digitToWord(30005));

  //   const data = fs.readFile("./assets/htmlFile.html", (err, data) => {
  //     if (err) {
  //       log(err);
  //       req.end();
  //     } else {
  //       //   res.write(data);
  //       res.end(data);
  //     }
  //   });

  // Basic routing
  let path = "./assets/";
  switch (req.url) {
    case "/":
      path += "index";
      res.statusCode = 200;
      break;
    case "/name":
      path += "name";
      res.statusCode = 200;
      break;
    case "/sunil":
      res.statusCode = 301;
      res.setHeader("Location", "/name");
      break;
    default:
      path += "notfound";
      res.statusCode = 404;
  }

  fs.readFile(`${path}.html`, (err, data) => {
    if (err) {
      log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  log("Listening on port 3000");
});
