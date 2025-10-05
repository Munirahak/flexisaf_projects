import React, { useState } from "react";
import Greeting from "./components/Greeting";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [isDay, setIsDay] = useState(true);
  const [tasks] = useState([
    "Complete React assignment",
    "Attend meeting",
    "Read about hooks",
  ]);

  const toggleMode = () => {
    setIsDay(!isDay);
  };

  const appStyle = {
    backgroundColor: isDay ? "#ffffff" : "#333333",
    color: isDay ? "#333" : "#f9f9f9",
    minHeight: "100vh",
    textAlign: "center",
    padding: "40px",
  };

  return (
    <div style={appStyle}>
      <Greeting name="Munirah" />
      <p>This is your React Basics Week 3 deliverable 🌸</p>
      <TaskList tasks={tasks} />

      <button
        onClick={toggleMode}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Switch to {isDay ? "Night" : "Day"} Mode
      </button>
    </div>
  );
}

export default App;
