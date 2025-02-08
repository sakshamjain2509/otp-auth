import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA87fkbkfrVticjMVtv4ZZtoeKsQFE_IZQ",
  authDomain: "react-otp-work-98954.firebaseapp.com",
  projectId: "react-otp-work-98954",
  storageBucket: "react-otp-work-98954.firebasestorage.app",
  messagingSenderId: "329220276191",
  appId: "1:329220276191:web:dd0ccf556dbf3d03800e6a",
  measurementId: "G-865VS0GBEY"
};

firebase.initializeApp(firebaseConfig);

export default firebase;