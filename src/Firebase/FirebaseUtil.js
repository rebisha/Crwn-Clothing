import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
