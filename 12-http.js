const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello this is a test server");
  }
  if (req.url === "/about") {
    res.end("This is the about page");
  }
  res.end(`
  <h1>Error Page</h1>
  <p>This page does not exist.</p>
  <a href = "/">back home</a>`);
});
server.listen(5000);
