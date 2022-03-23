import React, { useContext } from "react";
import TodoCtx from "../../store/task-context";
import classes from "./Todo.module.css";
import removeImage from "../../assets/icon-cross.svg";

const Todo = () => {
  const tasks = useContext(TodoCtx).tasks;
  const checkTaskIsEmpty = tasks.length === 0;

  const mapTask = tasks.map((task) => (
    <li className={classes["todo-item"]}>
      <input type="checkbox" name="complete" />
      <p>{task.name}</p>
      <button>
        <img src={removeImage} alt="Delete task button" />
      </button>
    </li>
  ));
  const massageEmptyTask = (
    <li className={classes.massage}>Tasks list is empty!</li>
  );

  return <ul>{checkTaskIsEmpty ? massageEmptyTask : mapTask}</ul>;
};

export default Todo;
