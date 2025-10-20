// Simulated "database"
let feedbackList = [
  { id: 1, name: "Aisha", feedback: "Great learning experience!" },
  { id: 2, name: "Musa", feedback: "React is becoming easier to understand!" },
];

// GET all feedbacks
export const getFeedbacks = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(feedbackList), 1000);
  });
};

// POST new feedback
export const addFeedback = async (newFeedback) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newItem = { id: feedbackList.length + 1, ...newFeedback };
      feedbackList = [...feedbackList, newItem];
      resolve(newItem);
    }, 1000);
  });
};
