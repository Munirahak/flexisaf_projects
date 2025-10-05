import React from "react";

function TaskList({ tasks }) {
  return (
    <div>
      <h3>Your Tasks:</h3>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task, index) => <li key={index}>{task}</li>)
        ) : (
          <p>No tasks available.</p>
        )}
      </ul>
    </div>
  );
}

export default TaskList;
