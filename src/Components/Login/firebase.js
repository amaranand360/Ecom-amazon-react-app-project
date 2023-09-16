// Import the functions you need from the SDKs you need
//import * as firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMnJSCtA8nWRq12vdj3GZH_aFaol9DvB4",
  authDomain: "amz-clone-react-app-0030.firebaseapp.com",
  projectId: "amz-clone-react-app-0030",
  storageBucket: "amz-clone-react-app-0030.appspot.com",
  messagingSenderId: "156254870999",
  appId: "1:156254870999:web:b7af67b6d738ea45cdbf92",
  measurementId: "G-L2BS92BF4B"
  

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;




