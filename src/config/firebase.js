// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDQz7AqwNzzxVUrIh0crqCRh6yi3M8iIw",
  authDomain: "grocery-compass.firebaseapp.com",
  projectId: "grocery-compass",
  storageBucket: "grocery-compass.appspot.com",
  messagingSenderId: "372646887147",
  appId: "1:372646887147:web:5e8defcfeffc46833d48ae",
  measurementId: "G-8MLG35J267",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
