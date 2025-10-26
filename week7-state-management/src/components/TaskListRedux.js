import React from "react";
import { useSelector } from "react-redux";

function TaskListRedux() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <>
      <h3>Tasks Using Redux</h3>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </>
  );
}

export default TaskListRedux;
