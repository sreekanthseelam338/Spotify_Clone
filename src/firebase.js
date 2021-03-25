import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCEB2PHT8Pl0GfPmCptsuR8CL5us2k_6yk",
  authDomain: "spotifyclone-7fa80.firebaseapp.com",
  projectId: "spotifyclone-7fa80",
  storageBucket: "spotifyclone-7fa80.appspot.com",
  messagingSenderId: "166660575610",
  appId: "1:166660575610:web:40abb2b01ad21d9ffb46c3",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
