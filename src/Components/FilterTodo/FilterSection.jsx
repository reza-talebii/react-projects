import React from "react";
import classes from "./FilterSection.module.css";
import TextBtn from "../TextBtn/TextBtn";

const FilterSection = () => {
  return (
    <section className={classes.filter}>
      <TextBtn class={classes.active}>All</TextBtn>
      <TextBtn>Active</TextBtn>
      <TextBtn>Completed</TextBtn>
    </section>
  );
};

export default FilterSection;
