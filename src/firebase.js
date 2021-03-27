import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvMLsKyBr6NzovYBme08H9Hm4uTbRG81w",
  authDomain: "challenge-5de23.firebaseapp.com",
  projectId: "challenge-5de23",
  storageBucket: "challenge-5de23.appspot.com",
  messagingSenderId: "813555452158",
  appId: "1:813555452158:web:7dcc801c9e1a817dbefdaf",
  measurementId: "G-M5L7JENRT4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
