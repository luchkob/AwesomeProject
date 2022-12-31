// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-_smj03Y06jEMQPMjC_Ve1sRRoTYQgDc",
  authDomain: "reacttest-801b3.firebaseapp.com",
  databaseURL: "https://reacttest-801b3-default-rtdb.firebaseio.com",
  projectId: "reacttest-801b3",
  storageBucket: "reacttest-801b3.appspot.com",
  messagingSenderId: "673794488054",
  appId: "1:673794488054:web:3d7c94a0360492aebcded7",
  measurementId: "G-ET8L6V6VY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export default app;