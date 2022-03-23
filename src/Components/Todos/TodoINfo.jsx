import React, { useContext } from "react";
import classes from "./TodoInfo.module.css";
import TextBtn from "../TextBtn/TextBtn";
import TodoCtx from "../../store/task-context";

const TodoInfo = () => {
  const clearAllTodos = useContext(TodoCtx).clearAllTask;

  const clearAllTodosHandler = () => clearAllTodos();

  return (
    <section className={classes["todo-list-info"]}>
      <p>
        <span>0</span> items left
      </p>
      <TextBtn onClick={clearAllTodosHandler}>Clear Completed</TextBtn>
    </section>
  );
};

export default TodoInfo;
