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
    setTasks((prevState) => {
      saveDataInStorage([...prevState, task]);
      return [...prevState, task];
    });
  };

  const complete = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const mainTask = tasks;

    const selectTask = mainTask[taskIndex];

    const newTask = { ...selectTask, complete: !selectTask.complete };

    mainTask[taskIndex] = newTask;
    setTasks(() => {
      saveDataInStorage(mainTask);
      return mainTask;
    });
  };

  const replaceTodos = (complete) => {
    // const filterTask = tasks.filter((task) => task.complete === complete);
    // console.log(tasks);
    // setTasks(filterTask);
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
    <TaskCtx.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearAllTask,
        complete,
        replaceTodos,
      }}
    >
      {props.children}
    </TaskCtx.Provider>
  );
};

export default TaskProvider;
