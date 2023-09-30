import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "vue-shopping-aec41.firebaseapp.com",
    projectId: "vue-shopping-aec41",
    storageBucket: "vue-shopping-aec41.appspot.com",
    messagingSenderId: import.meta.env.VITE_FIREBASE_APP_ID,
    appId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);