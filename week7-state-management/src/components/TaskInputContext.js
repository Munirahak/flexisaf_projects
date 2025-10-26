import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskInputContext() {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add Task (Context)</button>
    </form>
  );
}

export default TaskInputContext;
