// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYEDEqKoYnK1S9TvOvV-GPoanpBp9ZK9U",
  authDomain: "beautifulamericapainting.firebaseapp.com",
  projectId: "beautifulamericapainting",
  storageBucket: "beautifulamericapainting.appspot.com",
  messagingSenderId: "78437088845",
  appId: "1:78437088845:web:04a77add3c6fabe0006604",
  measurementId: "G-M2JEYDP2GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
