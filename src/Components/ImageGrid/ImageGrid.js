import React from "react";
import GetImages from "../GetImages";
import classes from "./ImagesGrid.module.css";

const ImageGrid = () => {
  const images = GetImages("images");
  const urls = [];

  const pushDataToArray = () => {
    for (const key in images) {
      urls.push(images[key]);
    }
  };
  pushDataToArray();

  return (
    <div className={classes["img-grid"]}>
      {urls.map((url) => (
        <div className={classes["img-wrap"]} key={url.id}>
          <img src={url.url} alt={url.name} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
