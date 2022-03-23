import React, { forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <section className={classes.form}>
      <input className={classes.input} ref={ref} {...props.attributes} />
      <button className={classes.btn}>add</button>
    </section>
  );
});

export default Input;
