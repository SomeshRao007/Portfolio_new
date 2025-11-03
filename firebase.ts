// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi_I2wdFcbTTan4WP1rzAEEaQT3TQrXVY",
  authDomain: "portfolio-webpage-2ebff.firebaseapp.com",
  projectId: "portfolio-webpage-2ebff",
  storageBucket: "portfolio-webpage-2ebff.firebasestorage.app",
  messagingSenderId: "895364002493",
  appId: "1:895364002493:web:64c19493431aa1bbf2bdd4",
  measurementId: "G-404K1Y0J0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
