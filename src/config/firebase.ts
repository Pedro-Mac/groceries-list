import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: 'vue-shopping-aec41.firebaseapp.com',
    projectId: 'vue-shopping-aec41',
    storageBucket: 'vue-shopping-aec41.appspot.com',
    messagingSenderId: import.meta.env.VITE_FIREBASE_APP_ID,
    appId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
