import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPvfzlm7O9VAeGVFx6Co0mOWv-N3pe5Lg",
  authDomain: "react-oauth-firebase-e8f17.firebaseapp.com",
  projectId: "react-oauth-firebase-e8f17",
  storageBucket: "react-oauth-firebase-e8f17.appspot.com",
  messagingSenderId: "219336603757",
  appId: "1:219336603757:web:d90a74a63aa73ab7d6a764",
  measurementId: "G-XRV33MPKNK",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();