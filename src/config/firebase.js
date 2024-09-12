import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, EmailAuthProvider, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";










const firebaseConfig = {
  apiKey: "AIzaSyAl_wMkyxtNxjFd_APe_6RrjmhgfZyl58o",
  authDomain: "primefx-62b6b.firebaseapp.com",
  projectId: "primefx-62b6b",
  storageBucket: "primefx-62b6b.appspot.com",
  messagingSenderId: "186319031566",
  appId: "1:186319031566:web:65ec5996e42e6ffc631b5f",
  measurementId: "G-V3BF6H0P6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const createUser = createUserWithEmailAndPassword;
export const SignInWithPopup = signInWithPopup;
export const authStateChanged = onAuthStateChanged;
export const emailProvider = new EmailAuthProvider();
export const db = getFirestore(app);

export function useAuthState() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return [currentUser];
}
