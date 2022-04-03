import React, { useEffect } from "react";

const GetImages = (collection) => {
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    const getUrlImages = async () => {
      const response = await fetch(
        `https://gallery-da082-default-rtdb.firebaseio.com/${collection}.json`
      );
      const data = await response.json();
      setImages(data);
      // return data;
    };

    getUrlImages();
    // console.log(imagesUrls);
  }, [collection]);

  return images;
};

export default GetImages;
