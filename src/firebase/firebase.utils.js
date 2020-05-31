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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account ' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
