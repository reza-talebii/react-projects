import React from "react";
import useStorage from "../../hook/useStorage";

const ProgressBar = (props) => {
  const { progress, url } = useStorage(props.file);
  console.log(progress, url);

  return <div className="progress">progress</div>;
};

export default ProgressBar;
