import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

const UploadForm = () => {
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);
  const fileTypes = ["image/jpg", "image/png"];

  const changeHandler = (e) => {
    const selected = e.target.files[0];

    if (selected && fileTypes.includes(selected.type)) {
      console.log(selected);
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file (jpg or png)");
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
