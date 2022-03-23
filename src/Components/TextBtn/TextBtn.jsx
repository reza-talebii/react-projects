import React from "react";
import classes from "./TextBtn.module.css";

const TextBtn = (props) => {
  return (
    <button className={`${classes.btnText} ${props.class || ""}`}>
      {props.children}
    </button>
  );
};

export default TextBtn;
