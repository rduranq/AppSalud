// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Importa Firebase Storage
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAGJz-W0oPCjzO8nGu5tkF9XkHgCfx0F9s",
//     authDomain: "farmacia-b89b6.firebaseapp.com",
//     projectId: "farmacia-b89b6",
//     storageBucket: "farmacia-b89b6.appspot.com",
//     messagingSenderId: "371776844726",
//     appId: "1:371776844726:web:a9458ba9e95ca82ff34717",
//     measurementId: "G-MNCC940B0K"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyDluoXdh6yUwo4XonhS930MCHvQTNuwWP0",
  authDomain: "farmacia1-19d0c.firebaseapp.com",
  projectId: "farmacia1-19d0c",
  storageBucket: "farmacia1-19d0c.appspot.com",
  messagingSenderId: "575156684387",
  appId: "1:575156684387:web:1162c3894a45d984261a56",
  measurementId: "G-5WQFTE0PQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // Inicializa Firebase Storage