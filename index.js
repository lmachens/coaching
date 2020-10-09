const express = require("express");
const bodyParser = require("body-parser");
const modal = require("./slack/feedback/modal");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.url, req.method, req.query, req.body);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/slack/feedback/modal", (req, res) => {
  res.json(modal);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
