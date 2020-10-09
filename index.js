const http = require("http");
const modal = require("./slack/feedback/modal");

const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.body);
  if (req.method === "POST" && req.url === "/slack/feedback/modal") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(modal));
    return;
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
