import React from 'react';
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDVdaFdFWvG7K5qoNNGw1uys9p-2opATtA',
  authDomain: 'c9-cyo-firebase-dev.firebaseapp.com',
  projectId: 'c9-cyo-firebase-dev',
  storageBucket: 'c9-cyo-firebase-dev.appspot.com',
  messagingSenderId: '1056674743490',
  appId: '1:1056674743490:web:9126d826700ed4df79675b',
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
