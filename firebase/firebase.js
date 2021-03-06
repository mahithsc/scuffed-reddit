// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKpShg6fFr3DhyV56Rda3xROF184DQR9M",
  authDomain: "scufffed-re.firebaseapp.com",
  projectId: "scufffed-re",
  storageBucket: "scufffed-re.appspot.com",
  messagingSenderId: "259904672869",
  appId: "1:259904672869:web:76361dfd44b0b3e56ee28c",
  measurementId: "G-XLVBEPDZ2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {db, auth}