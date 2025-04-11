// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-QU7KNt_sxBM-DfG6fInvzK0WhfPxKXA",
  authDomain: "login-auth-973fe.firebaseapp.com",
  projectId: "login-auth-973fe",
  storageBucket: "login-auth-973fe.firebasestorage.app",
  messagingSenderId: "79496580854",
  appId: "1:79496580854:web:550cfb40911c31d72be6d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db = getFirestore(app);
export default app;