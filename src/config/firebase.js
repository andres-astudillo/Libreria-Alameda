// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6CZyox5IVv86Nz_ZbRQuUCcX_Qg28jC0",
  authDomain: "ecommerce-coderhouse-4f77e.firebaseapp.com",
  projectId: "ecommerce-coderhouse-4f77e",
  storageBucket: "ecommerce-coderhouse-4f77e.appspot.com",
  messagingSenderId: "452917490242",
  appId: "1:452917490242:web:ad2dddda89b036040473db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default { db };
