import React, { useState } from "react";
import { addFeedback } from "../utils/api";

function FeedbackForm({ onFeedbackAdded }) {
  const [formData, setFormData] = useState({ name: "", feedback: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newFeedback = await addFeedback(formData); // async call
      onFeedbackAdded(newFeedback);
      setFormData({ name: "", feedback: "" });
    } catch (error) {
      console.error("Error adding feedback:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>Submit Your Feedback</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="feedback"
        placeholder="Enter feedback"
        value={formData.feedback}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Feedback"}
      </button>
    </form>
  );
}

export default FeedbackForm;
