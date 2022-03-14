import {
  collection, addDoc, getFirestore, Timestamp, query, orderBy, deleteDoc, doc,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

const db = getFirestore();
export const auth = getAuth();

export const createPost = async (text) => {
  await addDoc(collection(db, 'posts'), {
    text,
    email: auth.currentUser.email,
    dateCreate: Timestamp.now(),
    lastUpdate: Timestamp.now(),
    likes: [],
  });
};

export const refPost = () => query(collection(db, 'posts'), orderBy('dateCreate', 'desc'));

export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
};
