import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmBFP4uPaTe8esNOpwOl-6Y3U2LQYn8Qo",
  authDomain: "austria-binar.firebaseapp.com",
  projectId: "austria-binar",
  storageBucket: "austria-binar.appspot.com",
  messagingSenderId: "680108405089",
  appId: "1:680108405089:web:4595dcfdc78fd52e725520",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
