// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyActzkRW4qcA7XXxGWKjdeA9d8ID79xcH0",
  authDomain: "galley-91959.firebaseapp.com",
  projectId: "galley-91959",
  storageBucket: "galley-91959.appspot.com",
  messagingSenderId: "739362551308",
  appId: "1:739362551308:web:d67965be595ef9c025e029",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = app.firestore();

export { projectStorage, projectFirestore };
