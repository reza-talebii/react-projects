import React from "react";

import classes from "./UploadForm.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const UploadForm = () => {
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);
  const fileTypes = ["image/jpg", "image/png"];

  const changeHandler = (e) => {
    const selected = e.target.files[0];

    //VALIDATE FILE TYPE
    if (selected && fileTypes.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file (jpg or png)");
    }
  };

  return (
    <form className={classes.form}>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className={classes.output}>
        {error && <div className={classes.error}>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
