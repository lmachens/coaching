const express = require("express");
const bodyParser = require("body-parser");
const modal = require("./feedback/modal");
const { sendFeedback } = require("./feedback/coda");

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
      const feedback = Object.values(payload.view.state.values).map((value) => {
        const key = Object.keys(value)[0];
        const item = value[key];

        if (item.type === "radio_buttons" || item.type === "static_select") {
          return {
            key,
            value: item.selected_option ? item.selected_option.value : null,
          };
        }
        return {
          key,
          value: item.value || "",
        };
      });
      // Do not wait for slow ass coda, because Slack awaits an answer in less than 3 secs
      sendFeedback(feedback);
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
