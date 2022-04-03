import React, { useEffect } from "react";

const useFirestore = (collection) => {
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    const getUrlImages = async () => {
      const response = await fetch(
        `https://gallery-da082-default-rtdb.firebaseio.com/${collection}.json`
      );
      const data = await response.json();
      setImages(data);
    };

     getUrlImages();
  }, [collection]);

  return images;
};

export default useFirestore;
