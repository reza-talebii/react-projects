import React, { useContext, useState } from "react";
import classes from "./FilterSection.module.css";
import TextBtn from "../TextBtn/TextBtn";
import TodoCtx from "../../store/task-context";

const textBtnArr = ["All", "Active", "Completed"];

const FilterSection = () => {
  const todosCtx = useContext(TodoCtx);
  const [activeClass, setActiveClass] = useState("All");

  const setClassToBtn = (btn) => {
    setActiveClass(btn);
    // if (btn === "Active") todosCtx.replaceTodos(true);
    // if (btn === "Completed") todosCtx.replaceTodos(false);
  };

  return (
    <section className={classes.filter}>
      {textBtnArr.map((btn) => {
        const active = activeClass === btn;
        return (
          <TextBtn
            key={btn}
            class={active ? classes.active : ""}
            onClick={() => setClassToBtn(btn)}
          >
            {btn}
          </TextBtn>
        );
      })}
    </section>
  );
};

export default FilterSection;
