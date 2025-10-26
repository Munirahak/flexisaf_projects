import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskRedux } from "../redux/taskSlice";

function TaskInputRedux() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTaskRedux(task));
    setTask("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add Task (Redux)</button>
    </form>
  );
}

export default TaskInputRedux;
