import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDF-XwEDw-E5PwX2HBTFpXrfMVVea9zE8w",
  authDomain: "triveous-2d00a.firebaseapp.com",
  projectId: "triveous-2d00a",
  storageBucket: "triveous-2d00a.appspot.com",
  messagingSenderId: "823416435260",
  appId: "1:823416435260:web:16c5126e9bc7c738764939",
  measurementId: "G-DS62JW0N3T",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);