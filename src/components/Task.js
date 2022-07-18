import React from "react";

const Task = ({title, priority  }) => {
  return (
    <div className="card">
      <h3>Title: {title}</h3>
      <h3>priority: {priority}</h3>
    </div>
  );
};

export default Task;
