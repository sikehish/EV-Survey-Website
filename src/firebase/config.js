import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArXEBVdEW14ZXXCa7BufVETsBePYLgjUE",
    authDomain: "env-project-8ec0f.firebaseapp.com",
    projectId: "env-project-8ec0f",
    storageBucket: "env-project-8ec0f.appspot.com",
    messagingSenderId: "69344539642",
    appId: "1:69344539642:web:f248d2924a3439d3d16a43"
  };

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const timestamp = Timestamp;

export { db, auth, timestamp };