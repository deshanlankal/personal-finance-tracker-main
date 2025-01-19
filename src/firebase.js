import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7McuQyplHJvOa99DTC_F_E1hA7ht-qJw",
  authDomain: "taxgen-personal-finance-manage.firebaseapp.com",
  projectId: "taxgen-personal-finance-manage",
  storageBucket: "taxgen-personal-finance-manage.firebasestorage.app",
  messagingSenderId: "251979946812",
  appId: "1:251979946812:web:b865cb6fa1c8f8dcf29c39",
  measurementId: "G-PJ4DN5R7BF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
