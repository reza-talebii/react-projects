import React, { useState } from "react";
import classes from "./FilterSection.module.css";
import TextBtn from "../TextBtn/TextBtn";

const textBtnArr = ["All", "Active", "Completed"];

const FilterSection = () => {
  const [activeClass, setActiveClass] = useState("All");

  const setClassToBtn = (btn) => setActiveClass(btn);

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
