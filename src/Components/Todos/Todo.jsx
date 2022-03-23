import React, { useContext } from "react";
import TodoCtx from "../../store/task-context";
import classes from "./Todo.module.css";
import removeImage from "../../assets/icon-cross.svg";

const Todo = () => {
  const tasks = useContext(TodoCtx).tasks;
  const removeTodo = useContext(TodoCtx).removeTask;
  const checkTaskIsEmpty = tasks.length === 0;

  //remove todo handling
  const removeTodoHandler = (id) => removeTodo(id);

  const mapTask = tasks.map((task) => (
    <li className={classes["todo-item"]} key={task.id}>
      <input type="checkbox" name="complete" />
      <p>{task.name}</p>
      <button onClick={() => removeTodoHandler(task.id)}>
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
