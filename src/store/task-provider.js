import React, { useEffect, useState } from "react";

import TaskCtx from "./task-context";

const saveDataInStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  //get tasks to localStorage
  useEffect(() => {
    const getTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(getTasks);
  }, []);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
    saveDataInStorage(tasks);
  };

  const removeTask = (id) => {
    const filterTask = tasks.filter((task) => task.id !== id);
    setTasks(filterTask);
    saveDataInStorage(filterTask);
  };

  const clearAllTask = () => {
    setTasks([]);
    localStorage.clear();
  };

  return (
    <TaskCtx.Provider value={{ tasks, addTask, removeTask, clearAllTask }}>
      {props.children}
    </TaskCtx.Provider>
  );
};

export default TaskProvider;
