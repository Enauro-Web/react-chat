
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBze1OWF_aJoU-676-J-mXh3l8eNVWrOf8",
  authDomain: "enauro-chat.firebaseapp.com",
  projectId: "enauro-chat",
  storageBucket: "enauro-chat.appspot.com",
  messagingSenderId: "514803607390",
  appId: "1:514803607390:web:d5f1f24563bf536ca051cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
