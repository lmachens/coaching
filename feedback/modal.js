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
        action_id: "overall",
        options: [
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐⭐",
              emoji: true,
            },
            value: "5",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐",
              emoji: true,
            },
            value: "4",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐",
              emoji: true,
            },
            value: "3",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐",
              emoji: true,
            },
            value: "2",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐",
              emoji: true,
            },
            value: "1",
          },
        ],
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Head Coach",
      },
      accessory: {
        type: "radio_buttons",
        action_id: "headCoach",
        options: [
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐⭐",
              emoji: true,
            },
            value: "5",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐",
              emoji: true,
            },
            value: "4",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐",
              emoji: true,
            },
            value: "3",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐",
              emoji: true,
            },
            value: "2",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐",
              emoji: true,
            },
            value: "1",
          },
        ],
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Assistent Coach",
      },
      accessory: {
        type: "radio_buttons",
        action_id: "assistentCoach",
        options: [
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐⭐",
              emoji: true,
            },
            value: "5",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐",
              emoji: true,
            },
            value: "4",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐",
              emoji: true,
            },
            value: "3",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐",
              emoji: true,
            },
            value: "2",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐",
              emoji: true,
            },
            value: "1",
          },
        ],
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Curriculum",
      },
      accessory: {
        type: "radio_buttons",
        action_id: "curriculum",
        options: [
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐⭐",
              emoji: true,
            },
            value: "5",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐",
              emoji: true,
            },
            value: "4",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐",
              emoji: true,
            },
            value: "3",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐",
              emoji: true,
            },
            value: "2",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐",
              emoji: true,
            },
            value: "1",
          },
        ],
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Campus",
      },
      accessory: {
        type: "radio_buttons",
        action_id: "campus",
        options: [
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐⭐",
              emoji: true,
            },
            value: "5",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐",
              emoji: true,
            },
            value: "4",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐",
              emoji: true,
            },
            value: "3",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐",
              emoji: true,
            },
            value: "2",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐",
              emoji: true,
            },
            value: "1",
          },
        ],
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Job Coaching",
      },
      accessory: {
        type: "radio_buttons",
        action_id: "jobCoaching",
        options: [
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐⭐",
              emoji: true,
            },
            value: "5",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐",
              emoji: true,
            },
            value: "4",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐",
              emoji: true,
            },
            value: "3",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐",
              emoji: true,
            },
            value: "2",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐",
              emoji: true,
            },
            value: "1",
          },
        ],
      },
    },
    {
      type: "input",
      element: {
        type: "plain_text_input",
        multiline: true,
        action_id: "details",
      },
      label: {
        type: "plain_text",
        text: "Tell me more",
        emoji: true,
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
