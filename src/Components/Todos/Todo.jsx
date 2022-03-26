import React, { useEffect } from "react";

import classes from "./Todo.module.css";
import removeImage from "../../assets/icon-cross.svg";

import { todoAction } from "../../store/reducer";
import {
  getTodosAsync,
  removeTodoAsync,
  toggleCompleteTodoAsync,
} from "../../store/asyncThunk";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const checkTaskIsEmpty = todos.length === 0;

  //remove todo handling
  const removeTodoHandler = (id) => dispatch(removeTodoAsync(id));

  //complete handling
  const completeTodoHandler = (task) => dispatch(toggleCompleteTodoAsync(task));

  const mapTask = todos.map((task) => {
    const doneClass = task.complete ? classes.done : "";

    return (
      <li
        className={classes["todo-item"].concat(" " + doneClass)}
        key={task.id}
      >
        <input
          type="checkbox"
          name="complete"
          checked={task.complete}
          onChange={() => completeTodoHandler(task)}
        />
        <p>{task.name}</p>
        <button onClick={() => removeTodoHandler(task.id)}>
          <img src={removeImage} alt="Delete task button" />
        </button>
      </li>
    );
  });

  const massageEmptyTask = (
    <li className={classes.massage}>Tasks list is empty!</li>
  );

  return <ul>{checkTaskIsEmpty ? massageEmptyTask : mapTask}</ul>;
};

export default Todo;
