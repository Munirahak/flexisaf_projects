import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskListContext() {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <h3>Tasks Using Context API</h3>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </>
  );
}

export default TaskListContext;
