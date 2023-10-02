// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage }  from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQjYY1cUKNn_0GBl6Tfr7_u2WIC8lnm_c",
  authDomain: "crusian-f293e.firebaseapp.com",
  projectId: "crusian-f293e",
  storageBucket: "crusian-f293e.appspot.com",
  messagingSenderId: "649024874179",
  appId: "1:649024874179:web:8d018389c2b89fb1392476",
  measurementId: "G-BNBL16P5XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



