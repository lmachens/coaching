const express = require("express");
const bodyParser = require("body-parser");
const modal = require("./feedback/modal");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/slack/feedback/modal", async (req, res) => {
  try {
    const payload = JSON.parse(req.body.payload);
    if (payload.type === "view_submission") {
      console.log(JSON.stringify(payload, null, 2));
    }
    if (payload.type === "shortcut") {
      await modal.openModal(payload);
    }
    res.send();
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
