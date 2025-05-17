// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9cM5V_WKGnuHmt_d76kcEEpQeADheij8",
  authDomain: "coffee-store-app-e980f.firebaseapp.com",
  projectId: "coffee-store-app-e980f",
  storageBucket: "coffee-store-app-e980f.firebasestorage.app",
  messagingSenderId: "291710193207",
  appId: "1:291710193207:web:5d38d8b5eb47fee80d79b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
