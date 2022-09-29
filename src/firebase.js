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
  apiKey: "AIzaSyABKVob9PneOA6rpZT7W8fxXhgjm3_OxGc",
  authDomain: "eventme-2022.firebaseapp.com",
  projectId: "eventme-2022",
  storageBucket: "eventme-2022.appspot.com",
  messagingSenderId: "514139029631",
  appId: "1:514139029631:web:bd6a554daef484f09b3f4a",
  measurementId: "G-85SE99GVW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication and get reference to the service
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);

const analytics = getAnalytics(app);