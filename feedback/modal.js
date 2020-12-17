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
      type: "input",
      optional: false,
      label: {
        type: "plain_text",
        text: "Course",
        emoji: true,
      },
      element: {
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Select your course",
          emoji: true,
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "CGN-Web-20-4",
              emoji: true,
            },
            value: "CGN-Web-20-4",
          },
          {
            text: {
              type: "plain_text",
              text: "HH-Web-20-4",
              emoji: true,
            },
            value: "HH-Web-20-4",
          },
          {
            text: {
              type: "plain_text",
              text: "HH-Web-20-5",
              emoji: true,
            },
            value: "HH-Web-20-5",
          },
          {
            text: {
              type: "plain_text",
              text: "MUC-Web-20-1",
              emoji: true,
            },
            value: "MUC-Web-20-1",
          },
          {
            text: {
              type: "plain_text",
              text: "PWA Workshop with Leon",
              emoji: true,
            },
            value: "PWA Workshop with Leon",
          },
        ],
        action_id: "course",
      },
    },
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
        text: "Personal",
      },
      accessory: {
        type: "radio_buttons",
        action_id: "personal",
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
        text: "Head Coach (optional)",
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
        text: "Assistent Coach (optional)",
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
        text: "Curriculum (optional)",
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
        text: "Campus (optional)",
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
        text: "Job Coaching (optional)",
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
      optional: true,
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
