import React, { useEffect, useState } from "react";
import { getFeedbacks } from "../utils/api";

function FeedbackList({ newFeedback }) {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFeedbacks(); // async call
      setFeedbacks(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // When new feedback is added
  useEffect(() => {
    if (newFeedback) {
      setFeedbacks((prev) => [...prev, newFeedback]);
    }
  }, [newFeedback]);

  return (
    <div className="feedback-list">
      <h2>All Feedbacks</h2>
      {loading ? (
        <p>Loading feedbacks...</p>
      ) : (
        <ul>
          {feedbacks.map((f) => (
            <li key={f.id}>
              <strong>{f.name}:</strong> {f.feedback}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FeedbackList;
