
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBKfdgngxScE1SPhfBUAxHbZVdteoQZCG4",
  authDomain: "netflixgpt-28c54.firebaseapp.com",
  projectId: "netflixgpt-28c54",
  storageBucket: "netflixgpt-28c54.appspot.com",
  messagingSenderId: "927265938521",
  appId: "1:927265938521:web:2c3fff73305c218e802548",
  measurementId: "G-7ZD5G261J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();