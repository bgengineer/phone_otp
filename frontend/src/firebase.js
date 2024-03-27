// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbPkMop0DBpHvgisdAKIAzvApxATsY_Lo",
  authDomain: "phone-auth-4ea8d.firebaseapp.com",
  projectId: "phone-auth-4ea8d",
  storageBucket: "phone-auth-4ea8d.appspot.com",
  messagingSenderId: "603214308885",
  appId: "1:603214308885:web:0255e53509fb8b3064501c",
  measurementId: "G-LR0P8Q7TY2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);