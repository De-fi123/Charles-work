// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDm45pqUkYqJOyU7Aul4wB0FbhbQTUarOc",
    authDomain: "podcasts-1c4ad.firebaseapp.com",
    projectId: "podcasts-1c4ad",
    storageBucket: "podcasts-1c4ad.appspot.com",
    messagingSenderId: "935729282112",
    appId: "1:935729282112:web:16e8a96e3d57c64fd9f3a5",
    measurementId: "G-X45HPGFBV5"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;