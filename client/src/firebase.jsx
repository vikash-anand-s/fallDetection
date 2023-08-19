// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBIpXcLvzTKDNzzFkfDvG6XjLZtHmwOgo",
  authDomain: "fall-detection-3cb6d.firebaseapp.com",
  databaseURL: "https://fall-detection-3cb6d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fall-detection-3cb6d",
  storageBucket: "fall-detection-3cb6d.appspot.com",
  messagingSenderId: "854105440532",
  appId: "1:854105440532:web:a47329fa5844d0b8ddc201",
  measurementId: "G-FCQV729XET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);