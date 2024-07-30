// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRo2uJLE7chO0-JGxNFtUEnyAT5jvFtyQ",
  authDomain: "eshop-22c52.firebaseapp.com",
  projectId: "eshop-22c52",
  storageBucket: "eshop-22c52.appspot.com",
  messagingSenderId: "543592743227",
  appId: "1:543592743227:web:4f48286f8fbac63dc1f71e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
