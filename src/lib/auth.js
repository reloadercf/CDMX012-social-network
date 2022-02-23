/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';
import { firebaseConfig } from './firebase.js';

initializeApp(firebaseConfig);

export const createUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log(user);
    // ...
    })
    .catch((error) => {
      console.log(error);

    // ..
    });
};

export const LoginEmail = (email, password) => signInWithEmailAndPassword(getAuth(), email, password);

export const exit = () => signOut(getAuth());
