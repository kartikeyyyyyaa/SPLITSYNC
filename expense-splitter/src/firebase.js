import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGyfTLCL9b4aRsWo7DESuyBcOoyHk_1sA",
  authDomain: "splitsync-0.firebaseapp.com",
  projectId: "splitsync-0",
  storageBucket: "splitsync-0.firebasestorage.app",
  messagingSenderId: "220221207142",
  appId: "1:220221207142:web:ed58552f79e2d9090173a7",
  measurementId: "G-599X1YY7KR"
};

const app = initializeApp(firebaseConfig);

// 👉 THESE ARE THE MISSING EXPORTS CAUSING THE WHITE SCREEN 👈
export const auth = getAuth(app);
export const db = getFirestore(app);