import React, { useEffect } from "react";

import classes from "./ProgressBar.module.css";
import useStorage from "../../hook/useStorage";

const ProgressBar = (props) => {
  const { progress, url } = useStorage(props.file);

  //REMOVE PROGRESS BAR AFTER UPLOAD
  useEffect(() => {
    if (url) props.setFile(null);
  }, [url, props]);

  return (
    <div
      className={classes["progress-bar"]}
      style={{ width: progress + "%" }}
    ></div>
  );
};

export default ProgressBar;
