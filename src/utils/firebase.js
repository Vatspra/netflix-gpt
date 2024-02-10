// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO97cT61Kw3ZAENxuZRCtyowaKPNQy63Q",
  authDomain: "netflix-clone-b7f4d.firebaseapp.com",
  projectId: "netflix-clone-b7f4d",
  storageBucket: "netflix-clone-b7f4d.appspot.com",
  messagingSenderId: "808124289474",
  appId: "1:808124289474:web:998570c513dcba8864c65b",
  measurementId: "G-XH5PSMMJCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();