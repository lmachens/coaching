const fetch = require("node-fetch");
const { getCourses } = require("./coda");

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
          // options will be set based on coda table "Feedback courses"
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

let coursesPromise = getCourses();
setInterval(() => {
  coursesPromise = getCourses();
}, 1000 * 60 * 5);

const openModal = async (payload) => {
  await coursesPromise();
  const newModal = { ...modal };
  newModal.blocks[0].element.options = courses.map((course) => ({
    text: {
      type: "plain_text",
      text: course,
      emoji: true,
    },
    value: course,
  }));

  return await fetch("https://slack.com/api/views.open", {
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
