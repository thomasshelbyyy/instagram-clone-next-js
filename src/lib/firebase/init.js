// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}from "firebase/firestore"
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6jeYj6VxdcotkV5ugvMR1P0b6p1k6F0A",
  authDomain: "famous-biplane-398500.firebaseapp.com",
  projectId: "famous-biplane-398500",
  storageBucket: "famous-biplane-398500.appspot.com",
  messagingSenderId: "659167255309",
  appId: "1:659167255309:web:6fe73f0997a9e67491ae44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app)
export const auth = getAuth(app)