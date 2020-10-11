const fetch = require("node-fetch");

const slackToCoda = {
  course: "Course",
  jobCoaching: "Job-Coaching",
  assistentCoach: "Assistant Coach",
  campus: "Campus",
  curriculum: "Curriculum",
  details: "Other",
  headCoach: "Head Coach",
  overall: "Overall",
};

const getColumns = async () => {
  const response = await fetch(
    `https://coda.io/apis/v1/docs/${process.env.CODA_DOC_ID}/tables/${process.env.CODA_TABLE_ID}/columns`,
    {
      headers: {
        Authorization: `Bearer ${process.env.CODA_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
};

const sendFeedback = async (feedback) => {
  const columns = await getColumns();
  const cells = feedback.map(({ key, value }) => {
    const codaKey = slackToCoda[key];
    const column = columns.items.find((column) => column.name === codaKey);
    return {
      column: column.id,
      value: value || "",
    };
  });
  console.log(cells);
  return fetch(
    `https://coda.io/apis/v1/docs/${process.env.CODA_DOC_ID}/tables/${process.env.CODA_TABLE_ID}/rows`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CODA_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rows: [
          {
            cells,
          },
        ],
      }),
    }
  );
};

exports.sendFeedback = sendFeedback;
