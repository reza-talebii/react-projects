import React from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage as projectStorage } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = React.useState(0);
  const [error, setError] = React.useState(null);
  const [url, setUrl] = React.useState(null);

  React.useEffect(() => {
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //SET PROGRESS
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => {
        //HANDLE ERROR
        setError(error);
      },
      () => {
        //GET DOWNLOAD URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setUrl(downloadURL)
        );
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
