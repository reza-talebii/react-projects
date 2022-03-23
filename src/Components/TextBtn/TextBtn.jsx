import React from "react";

const TextBtn = (props) => {
  return (
    <button className={`btnText ${props.class}}`}>{props.children}</button>
  );
};

export default TextBtn;
