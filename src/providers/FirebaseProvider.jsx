import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

export const FirebaseContext = React.createContext();

export const FirebaseProvider = (props) => {
  const { children } = props;

  const theValues = { app, auth };
  return (
    <FirebaseContext.Provider value={theValues}>
      {children}
    </FirebaseContext.Provider>
  );
};
