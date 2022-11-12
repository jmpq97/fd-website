// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmcnRFnIIJEbE_UpBsdEWzYTg-RX3v7AM",
  authDomain: "fd-website-test.firebaseapp.com",
  projectId: "fd-website-test",
  storageBucket: "fd-website-test.appspot.com",
  messagingSenderId: "254012577144",
  appId: "1:254012577144:web:d31875652a1633b469a48d",
  measurementId: "G-YYDQK6MGNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {analytics, app};