// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxUcGs-M2euscrOXblF6ymLYfMlTstpAA",
  authDomain: "clone-39a25.firebaseapp.com",
  projectId: "clone-39a25",
  storageBucket: "clone-39a25.firebasestorage.app",
  messagingSenderId: "583055915316",
  appId: "1:583055915316:web:702e8b6ba9f743b7d74d61"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;