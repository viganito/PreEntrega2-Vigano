import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_BOOTSTRAP_API_KEY,
  authDomain: "proyecto-final-8b4a9.firebaseapp.com",
  projectId: "proyecto-final-8b4a9",
  storageBucket: "proyecto-final-8b4a9.appspot.com",
  messagingSenderId: "324973974360",
  appId: "1:324973974360:web:eb4fac510ffc1213018b2d"
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)