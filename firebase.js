import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBDSi6SM3hAjlKKwEVrShJCYulBSYw3nQ",
  authDomain: "catstagram-50b14.firebaseapp.com",
  projectId: "catstagram-50b14",
  storageBucket: "catstagram-50b14.appspot.com",
  messagingSenderId: "700650942991",
  appId: "1:700650942991:web:005d7b0146b83d444ca97a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
//const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
