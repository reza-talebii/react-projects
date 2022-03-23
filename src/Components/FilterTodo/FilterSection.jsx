import React from "react";
import classes from "./FilterSection.module.css";

const FilterSection = () => {
  return (
    <section className={classes.filter}>
      <button className={classes.active}>All</button>
      <button>Active</button>
      <button>Completed</button>
    </section>
  );
};

export default FilterSection;
