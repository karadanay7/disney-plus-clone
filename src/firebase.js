// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration


// Initialize Firebase


// Initialize services
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(); // Initialize the Google Auth Provider
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

provider.setCustomParameters({   
    prompt : "select_account "
});

// Update to use the new signInWithGoogle function
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export default db;
