const { log } = require("console");
const http = require("http");

// createServer accepts the callBack function
// req : has info about requrst like url, request type etc
// res : is used to send response to user / browser
const server = http.createServer((req, res) => {
  log("Request has been made");
  //   log(req);
  //   log(req.url, req.method, req.headers);

  // set header
  res.setHeader("Content-Type", "text/html");

  // write contenet
  res.write("<h2> Hello world </h2>");
  res.write("<h2> Hello Nepal  </h2>");

  // send response
  res.end();
});

server.listen(3000, "localhost", () => {
  log("Listening for request post 3000");
});
