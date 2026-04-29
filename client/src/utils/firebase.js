import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "interviewiq-55fb2.firebaseapp.com",
    projectId: "interviewiq-55fb2",
    storageBucket: "interviewiq-55fb2.firebasestorage.app",
    messagingSenderId: "494536373449",
    appId: "1:494536373449:web:b13bab75de2c4ba0c20918"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export { auth, provider }