import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBopr8mN0a7B_4s1sG8rPN2-J2wj478uEA",
  authDomain: "crwn-db-efd13.firebaseapp.com",
  projectId: "crwn-db-efd13",
  storageBucket: "crwn-db-efd13.appspot.com",
  messagingSenderId: "996248432128",
  appId: "1:996248432128:web:0855161d3b54fb7f0fb2e5",
  measurementId: "G-MF8329TT66"
};

// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: `select_account` });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;