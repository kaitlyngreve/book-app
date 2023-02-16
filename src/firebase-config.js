
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCGf2jZ6SCALz72CmivUbSCHan9f1C_9d4",
    authDomain: "book-log-fcbfd.firebaseapp.com",
    projectId: "book-log-fcbfd",
    storageBucket: "book-log-fcbfd.appspot.com",
    messagingSenderId: "19149544310",
    appId: "1:19149544310:web:29dcea7099c220ae0e7857",
    measurementId: "G-E4M949XGDK"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
