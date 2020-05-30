import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCh8flcbn6zagxtyVa68RKzPXEBWGU1P2M',
  authDomain: 'crwn-db-669d5.firebaseapp.com',
  databaseURL: 'https://crwn-db-669d5.firebaseio.com',
  projectId: 'crwn-db-669d5',
  storageBucket: 'crwn-db-669d5.appspot.com',
  messagingSenderId: '26832605685',
  appId: '1:26832605685:web:e1c3ebb038639d5bcb10bc',
  measurementId: 'G-YH2JTSWCE6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account ' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
