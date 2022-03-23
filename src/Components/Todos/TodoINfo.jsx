import React, { useContext } from "react";
import classes from "./TodoInfo.module.css";
import TextBtn from "../TextBtn/TextBtn";
import TodoCtx from "../../store/task-context";

const TodoInfo = () => {
  const todoCtx = useContext(TodoCtx);

  const clearAllTodosHandler = () => todoCtx.clearAllTask();
  const todosNotCompleted = todoCtx.tasks.filter((todo) => !todo.complete);

  return (
    <section className={classes["todo-list-info"]}>
      <p>
        <span>{todosNotCompleted.length}</span> items left
      </p>
      <TextBtn onClick={clearAllTodosHandler}>Clear Completed</TextBtn>
    </section>
  );
};

export default TodoInfo;
