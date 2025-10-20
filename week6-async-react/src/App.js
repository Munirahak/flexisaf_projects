import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import "./App.css";

function App() {
  const [newFeedback, setNewFeedback] = useState(null);

  return (
    <div className="app-container">
      <h1>Async React Demo</h1>
      <p>
        Demonstrating JSON, Form Data, Promises, and Async/Await with a simple
        Feedback App.
      </p>
      <FeedbackForm onFeedbackAdded={setNewFeedback} />
      <FeedbackList newFeedback={newFeedback} />
    </div>
  );
}

export default App;
