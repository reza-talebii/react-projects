import React, { useContext } from "react";
import classes from "./TodoWrapper.module.css";
import TodoInfo from "./TodoInfo";
import Todo from "./Todo";

const TodoWrapper = () => {
  return (
    <section className={classes.todoWrapper}>
      <Todo />
      <TodoInfo />
    </section>
  );
};

export default TodoWrapper;
