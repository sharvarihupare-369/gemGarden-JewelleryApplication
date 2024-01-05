import firebase from 'firebase/app'
import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAlqMLgZMPqRdcLP-JZBB5szem5XAlIgqA",
    authDomain: "jewelleryapp-c1f97.firebaseapp.com",
    projectId: "jewelleryapp-c1f97",
    storageBucket: "jewelleryapp-c1f97.appspot.com",
    messagingSenderId: "677612339608",
    appId: "1:677612339608:web:a58aaad4759340c3ceebed",
    measurementId: "G-FNFS7DTE3K"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);