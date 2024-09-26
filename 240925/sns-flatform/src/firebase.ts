import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUGYD9VUn_Rva8hjNGIFI9j0Lq91ag_-Y",
  authDomain: "snsflatform-3d27f.firebaseapp.com",
  projectId: "snsflatform-3d27f",
  storageBucket: "snsflatform-3d27f.appspot.com",
  messagingSenderId: "158940273167",
  appId: "1:158940273167:web:21b367dfe81e3b7525e17a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app)

export const db = getFirestore(app)
