// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { collection, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSzHnTQtl5j799eL2NE7wt7sC7ExvRELM",
  authDomain: "gallery-da082.firebaseapp.com",
  projectId: "gallery-da082",
  storageBucket: "gallery-da082.appspot.com",
  messagingSenderId: "5738352054",
  appId: "1:5738352054:web:4239ff3102b0e6839d4517",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, storage, db };
