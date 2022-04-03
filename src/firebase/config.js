// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyActzkRW4qcA7XXxGWKjdeA9d8ID79xcH0",
  authDomain: "galley-91959.firebaseapp.com",
  databaseURL: "https://galley-91959-default-rtdb.firebaseio.com",
  projectId: "galley-91959",
  storageBucket: "galley-91959.appspot.com",
  messagingSenderId: "739362551308",
  appId: "1:739362551308:web:d67965be595ef9c025e029",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, storage, db };
