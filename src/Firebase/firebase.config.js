// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo2dVQzv4bRK3FidOQ_aTOZlRMeDl20GY",
  authDomain: "kitchen-chronicles-7e56c.firebaseapp.com",
  projectId: "kitchen-chronicles-7e56c",
  storageBucket: "kitchen-chronicles-7e56c.appspot.com",
  messagingSenderId: "87307524904",
  appId: "1:87307524904:web:839bb11f64fe15bc724e1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app