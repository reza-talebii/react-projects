import React, { useEffect } from "react";

import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage as projectStorage, db } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = React.useState(0);
  const [error, setError] = React.useState(null);
  const [url, setUrl] = React.useState(null);
  const colRef = collection(db, "images");

  useEffect(() => {
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //SET PROGRESS
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog);
      },
      (error) => {
        //HANDLE ERROR
        setError(error);
      },
      async () => {
        //GET DOWNLOAD URL
        const getUrl = await getDownloadURL(uploadTask.snapshot.ref);

        await fetch(
          "https://gallery-da082-default-rtdb.firebaseio.com/images.json",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: getUrl }),
          }
        );

        setUrl(getUrl);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
