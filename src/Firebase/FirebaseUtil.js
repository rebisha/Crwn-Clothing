import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyBg_sr8fu_gHx4XoWJDWC4cIzXMWGYkEx4",
  authDomain: "crwn-clothing-909d8.firebaseapp.com",
  databaseURL: "https://crwn-clothing-909d8.firebaseio.com",
  projectId: "crwn-clothing-909d8",
  storageBucket: "crwn-clothing-909d8.appspot.com",
  messagingSenderId: "1052984570495",
  appId: "1:1052984570495:web:ba66d1b35153ddac4b454a",
  measurementId: "G-R05YMHY34X"
};

firebase.initializeApp(config);

export const defaultAuth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => defaultAuth.signInWithPopup(provider);

export default firebase;
