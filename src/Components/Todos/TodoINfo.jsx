import React from "react";
import classes from "./TodoInfo.module.css";
import TextBtn from "../TextBtn/TextBtn";

const TodoInfo = () => {
  return (
    <section className={classes["todo-list-info"]}>
      <p>
        <span>0</span> items left
      </p>
      <TextBtn>Clear Completed</TextBtn>
    </section>
  );
};

export default TodoInfo;
