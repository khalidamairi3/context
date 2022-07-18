import React from "react";
import Task from "./Task";
import { useTasks } from "../contexts/TaskContext";

const TasksList = () => {
  const { tasks } = useTasks();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {tasks.map((task) => (
        <Task key={task.title} title={task.title} priority={task.priority} />
      ))}
    </div>
  );
};

export default TasksList;
