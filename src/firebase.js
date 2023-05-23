import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, logEvent} from "firebase/analytics";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: "chat-ab746.firebaseapp.com",
  // projectId: "chat-ab746",
  // storageBucket: "chat-ab746.appspot.com",
  // messagingSenderId: "901216368405",
  // appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
  // apiKey: "AIzaSyDb4EAk_bVEBF3rs-shuEvuLMrR79fit-A",
  // authDomain: "chatapp02-a3f40.firebaseapp.com",
  // projectId: "chatapp02-a3f40",
  // storageBucket: "chatapp02-a3f40.appspot.com",
  // messagingSenderId: "155516515454",
  // appId: "1:155516515454:web:56352d09d4acb3cad7942f",
  // measurementId: "G-LD5Z47VEQV"
  apiKey: "AIzaSyDyUeFSscEXgMtrcFDtGXGhTeySI0roW9w",
  authDomain: "chat-729db.firebaseapp.com",
  projectId: "chat-729db",
  storageBucket: "chat-729db.appspot.com",
  messagingSenderId: "1043133721673",
  appId: "1:1043133721673:web:a6c4b692313742309d6398",
  measurementId: "G-EX6DXLRR6L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
export const analytic = getAnalytics(app);