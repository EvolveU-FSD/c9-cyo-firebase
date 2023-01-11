import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAejIdad-5Wfz1xHgV4mM31oFluDtcN_Zc',
  authDomain: 'c9-cyo-firebase.firebaseapp.com',
  projectId: 'c9-cyo-firebase',
  storageBucket: 'c9-cyo-firebase.appspot.com',
  messagingSenderId: '356231489606',
  appId: '1:356231489606:web:a854b4ebaa824f5b744247',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const cloudFuncs = getFunctions(app);
const storage = getStorage(app);

if (process.env.REACT_APP_USE_EMULATORS === 'true') {
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectFunctionsEmulator(cloudFuncs, 'localhost', 5001);
  connectStorageEmulator(storage, 'localhost', 9199);
}

export const FirebaseContext = React.createContext();

export const FirebaseProvider = (props) => {
  const { children } = props;

  const theValues = { app, auth, db, cloudFuncs, storage };
  return (
    <FirebaseContext.Provider value={theValues}>
      {children}
    </FirebaseContext.Provider>
  );
};
