import React from "react";
import classes from "./TodoInfo.module.css";

const TodoInfo = () => {
  return (
    <section className={classes["todo-list-info"]}>
      <p>
        <span>0</span> items left
      </p>
      <button>Clear Completed</button>
    </section>
  );
};

export default TodoInfo;
