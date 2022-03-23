import React, { useContext } from "react";
import TodoCtx from "../../store/task-context";
import classes from "./Todo.module.css";

const Todo = () => {
  const tasks = useContext(TodoCtx).tasks;
  const checkTaskIsEmpty = tasks.length === 0;

  const mapTask = tasks.map((task) => (
    <li className={classes.massage}>{task.name}</li>
  ));
  const massageEmptyTask = (
    <li className={classes.massage}>Tasks list is empty!</li>
  );

  return <ul>{checkTaskIsEmpty ? massageEmptyTask : mapTask}</ul>;
};

export default Todo;
