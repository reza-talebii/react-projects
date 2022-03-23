import React from "react";
import classes from "./TodoWrapper.module.css";
import TodoInfo from "./TodoInfo";

const TodoWrapper = () => {
  return (
    <section className={classes.todoWrapper}>
      <TodoInfo />
    </section>
  );
};

export default TodoWrapper;
