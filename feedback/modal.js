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
            value: "overall-5",
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
              text: "⭐⭐⭐",
              emoji: true,
            },
            value: "overall-3",
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
              text: "⭐",
              emoji: true,
            },
            value: "overall-1",
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
            value: "headCoach-5",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐",
              emoji: true,
            },
            value: "headCoach-4",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐",
              emoji: true,
            },
            value: "headCoach-3",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐",
              emoji: true,
            },
            value: "headCoach-2",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐",
              emoji: true,
            },
            value: "headCoach-1",
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
            value: "assistentCoach-5",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐",
              emoji: true,
            },
            value: "assistentCoach-4",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐",
              emoji: true,
            },
            value: "assistentCoach-3",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐",
              emoji: true,
            },
            value: "assistentCoach-2",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐",
              emoji: true,
            },
            value: "assistentCoach-1",
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
            value: "curriculum-5",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐",
              emoji: true,
            },
            value: "curriculum-4",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐",
              emoji: true,
            },
            value: "curriculum-3",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐",
              emoji: true,
            },
            value: "curriculum-2",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐",
              emoji: true,
            },
            value: "curriculum-1",
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
            value: "campus-5",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐",
              emoji: true,
            },
            value: "campus-4",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐",
              emoji: true,
            },
            value: "campus-3",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐",
              emoji: true,
            },
            value: "campus-2",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐",
              emoji: true,
            },
            value: "campus-1",
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
            value: "jobCoaching-5",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐⭐",
              emoji: true,
            },
            value: "jobCoaching-4",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐⭐",
              emoji: true,
            },
            value: "jobCoaching-3",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐⭐",
              emoji: true,
            },
            value: "jobCoaching-2",
          },
          {
            text: {
              type: "plain_text",
              text: "⭐",
              emoji: true,
            },
            value: "jobCoaching-1",
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
