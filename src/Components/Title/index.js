import React from "react";
import classes from "./Title.module.css";

const Title = () => {
  return (
    <div className={classes.title}>
      <h1>FireGram</h1>
      <h2>Your Pictures</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default Title;
