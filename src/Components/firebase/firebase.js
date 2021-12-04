// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh4hA9d2fxtdf2vldvX6-SpptOloxwjPk",
  authDomain: "osca-f16a8.firebaseapp.com",
  projectId: "osca-f16a8",
  storageBucket: "osca-f16a8.appspot.com",
  messagingSenderId: "758662642759",
  appId: "1:758662642759:web:596b5cc52c228a820b0562",
  measurementId: "G-WQSYTLZB73"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp