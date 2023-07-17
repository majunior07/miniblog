import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBefhmiXJu0aPTX3BXrDuJaThSLrgAWS8k",
  authDomain: "miniblog-a2c2b.firebaseapp.com",
  projectId: "miniblog-a2c2b",
  storageBucket: "miniblog-a2c2b.appspot.com",
  messagingSenderId: "360074718872",
  appId: "1:360074718872:web:7e24b219164e64c40d6aed"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);