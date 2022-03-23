import React, { useEffect, useState } from "react";

import TaskCtx from "./task-context";

const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  //get tasks to localStorage
  useEffect(() => {
    const getTasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(getTasks);
  }, []);

  //send tasks to localStorage
  useEffect(() => {
    JSON.stringify(localStorage.setItem("tasks", tasks));
  }, [tasks]);

  const addTask = (task) => setTasks((prevState) => [...prevState, task]);

  const removeTask = (id) => {
    const filterTask = tasks.filter((task) => task.id !== id);
    setTasks(filterTask);
  };

  const clearAllTask = () => {
    setTasks([]);
    localStorage.clear();
  };

  return (
    <TaskCtx.Provider value={(tasks, addTask, removeTask, clearAllTask)}>
      {props.children}
    </TaskCtx.Provider>
  );
};

export default TaskProvider;
