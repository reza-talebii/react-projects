import React from "react";

import classes from "./ProgressBar.module.css";
import useStorage from "../../hook/useStorage";

const ProgressBar = (props) => {
  const { progress, url } = useStorage(props.file);

  return <div className={classes["progress-bar"]}>progress</div>;
};

export default ProgressBar;
