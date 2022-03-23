import React from "react";

import classes from "./TodoHeader.module.css";
import themICon from "../../assets/icon-sun.svg";

const TodoHeader = () => {
  return (
    <section className={classes.todoHeader}>
      <h1>TODO</h1>
      <img src={themICon} alt="them icon" />
    </section>
  );
};

export default TodoHeader;
