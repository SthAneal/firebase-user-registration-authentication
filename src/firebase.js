// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import  { getAuth } from "firebase/auth";
// SDK for google realtime database
import  { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "---Your API Key---",
  authDomain: "---Your App Domain---",
  projectId: "---Your ProjectId---",
  storageBucket: ".....",
  messagingSenderId: "....",
  appId: ".....",
  measurementId: "....."
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication and get reference to the service
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);

const analytics = getAnalytics(app);
