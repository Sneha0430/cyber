// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkczwNv1YhJqLMhlaPYSn8FDDGsX1ndko",
  authDomain: "promptcraft-265d9.firebaseapp.com",
  projectId: "promptcraft-265d9",
  storageBucket: "promptcraft-265d9.firebasestorage.app",
  messagingSenderId: "254764771330",
  appId: "1:254764771330:web:862cf1a0d1cf89c0201f1b",
  measurementId: "G-VEW30QP0WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);