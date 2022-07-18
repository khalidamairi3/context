import { createContext, useContext, useState } from "react";

export const TasksContext = createContext([]);

// this component needs to be wrapper around the section where it will provide the context to it 
export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { title: "task 1", priority: "low" },
    { title: "task 2", priority: "high" },
    { title: "task 3", priority: "high" },
    { title: "task 4", priority: "high" },
    { title: "task 5", priority: "high" }
  ]);
  // the value prop contains the values you are providing
  return (
    <TaskContextProvider.Provider value={{ tasks, setTasks }}>{children}</TaskContextProvider.Provider>
  );
};

// custom hook, to be used in other components so that they can consume the context
export const useTasks = () => useContext(TasksContext);
