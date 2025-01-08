import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyBsFdEQHLpmbDupsKR1Zm0FB2fSoh4SoF8",
   authDomain: "agit-base.firebaseapp.com",
   projectId: "agit-base",
   storageBucket: "agit-base.firebasestorage.app",
   messagingSenderId: "793237998424",
   appId: "1:793237998424:web:749aa9e392c4c530fab32d",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
