import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3rPSxjqXnwOasGz-qgEzijdnMLGw6B-M",
  authDomain: "netflix-5bd03.firebaseapp.com",
  projectId: "netflix-5bd03",
  storageBucket: "netflix-5bd03.appspot.com",
  messagingSenderId: "334131566797",
  appId: "1:334131566797:web:e8b15f31efadf29168b184",
  measurementId: "G-0XM6YY271P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
