//import firebase from 'firebase';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzSVNKLv3uzJFTndHl7_35rBFmME5rdRk",
  authDomain: "kitashare-1653e.firebaseapp.com",
  databaseURL: "https://kitashare-1653e-default-rtdb.firebaseio.com",
  projectId: "kitashare-1653e",
  storageBucket: "kitashare-1653e.appspot.com",
  messagingSenderId: "619398397215",
  appId: "1:619398397215:web:c6aa6ff09dc83105fac42a",
  measurementId: "G-BKH2C90ZW1",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const fire = firebase;
export default fire;

// export const auth = firebase.auth();

// const provider = new fire.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);
