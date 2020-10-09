const fetch = require("node-fetch");

const modal = {
  type: "modal",
  callback_id: "feedback-modal",
  title: {
    type: "plain_text",
    text: "Coaching Feedback",
    emoji: true,
  },
  submit: {
    type: "plain_text",
    text: "Submit",
    emoji: true,
  },
  close: {
    type: "plain_text",
    text: "Cancel",
    emoji: true,
  },
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "How do you feel?",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Overall",
      },
      accessory: {
        type: "radio_buttons",
        options: [
          {
            text: {
              type: "plain_text",
              text: "⭐",
              emoji: true,
            },
            value: "overall-1",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐",
              emoji: true,
            },
            value: "overall-2",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐",
              emoji: true,
            },
            value: "overall-3",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐",
              emoji: true,
            },
            value: "overall-4",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐⭐",
              emoji: true,
            },
            value: "overall-5",
          },
        ],
        action_id: "radio_buttons-action",
      },
    },
  ],
};

const openModal = (payload) => {
  return fetch("https://slack.com/api/views.open", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SLACK_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      trigger_id: payload.trigger_id,
      view: modal,
    }),
  });
};

exports.openModal = openModal;
