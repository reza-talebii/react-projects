import React from "react";
import useFirestore from "../../hook/useFirestore";
const ImageGrid = () => {
  const images = useFirestore("images");
  const urls = [];

  const pushDataToArray = () => {
    for (const key in images) {
      urls.push(images[key]);
    }
  };
  pushDataToArray();

  return (
    <div className={""}>
      {urls.map((url) => (
        <img key={url.id} src={url.url} alt={url.name} />
      ))}
    </div>
  );
};

export default ImageGrid;
