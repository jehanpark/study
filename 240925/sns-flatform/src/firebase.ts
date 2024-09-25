import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0ihDdQolitI_4AfLUX1_ueNHVOWIJvL4",
  authDomain: "sns-faltform.firebaseapp.com",
  projectId: "sns-faltform",
  storageBucket: "sns-faltform.appspot.com",
  messagingSenderId: "28234917460",
  appId: "1:28234917460:web:800ca6a3fbd6ea43ffafc1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
