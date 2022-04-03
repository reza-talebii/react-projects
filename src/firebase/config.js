import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSzHnTQtl5j799eL2NE7wt7sC7ExvRELM",
  authDomain: "gallery-da082.firebaseapp.com",
  databaseURL: "https://gallery-da082-default-rtdb.firebaseio.com",
  projectId: "gallery-da082",
  storageBucket: "gallery-da082.appspot.com",
  messagingSenderId: "5738352054",
  appId: "1:5738352054:web:4239ff3102b0e6839d4517"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };