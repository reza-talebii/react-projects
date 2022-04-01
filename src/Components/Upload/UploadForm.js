import React from "react";

const UploadForm = () => {
  const changeHandler = () => {
    console.log("changeHandler");
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
    </form>
  );
};

export default UploadForm;
