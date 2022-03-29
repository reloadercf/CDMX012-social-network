/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
import {
  getFirestore, doc, setDoc, getAuth, collection,
  query, where, onSnapshot, orderBy, serverTimestamp, getDocs,
} from '../firebase-imports.js';
import { app } from './firebase-config.js';
import { createPosts } from '../components/renderingPosts.js';

// Saves the data from the post just created in the 'posts' collection
export async function saveNewPostData(postsForm) {
  const form = document.querySelector('#readingForm');

  const db = getFirestore();

  const auth = getAuth(app); // current user
  const user = auth.currentUser;

  const today = new Date();
  const dateToday = `${today.getDate()}/${(today.getMonth() + 1)}/${today.getFullYear()}`;

  try { // Creates a new doc in the posts coleccion with the new input
    const docRef = doc(collection(db, 'posts'));
    const infoPost = {
      idDocument: docRef.id, // add document id
      uid: user.uid,
      reading: postsForm.bookTitle.value,
      text: postsForm.postContent.value,
      date: dateToday,
      likes: [],
      timestamp: serverTimestamp(),
    };

    await setDoc(docRef, infoPost);

    form.reset();
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// Separar responsabilidades de las funciones, estas de acá solo para lidiar con firestore
async function  (post) {
  const auth = getAuth(app); // Current user
  const user = auth.currentUser;

  const db = getFirestore();
  const profilesRef = collection(db, 'profiles'); // Gets the profile that matches the post.uid
  const q = query(profilesRef, where('uid', '==', post.uid));

  let name = '';
  let username = '';

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((docu) => {
    name = docu.data().name;
    username = docu.data().username;
  });

  createPosts(post, user.uid, name, username);
}

export function getPosts() {
  const db = getFirestore();
  const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

  onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        /* console.log('New post: ', change.doc.data()); */
        getOpData(change.doc.data());
      }
      if (change.type === 'modified') {
        console.log('Modified post: ', change.doc.data());
      }
      if (change.type === 'removed') {
        console.log('Removed post: ', change.doc.data());
      }
    });
  });
}

// Gets the original poster(OP) data and renders all the posts
/* function renderingPosts(post) {
  const db = getFirestore();

  const auth = getAuth(app); // Current user
  const user = auth.currentUser;

  const postsArea = document.querySelector('#postsArea'); // Cleans the post area
  postsArea.innerHTML = '';

  const profilesRef = collection(db, 'profiles'); // Gets the profile that matches the post.uid
  const q = query(profilesRef, where('uid', '==', post.uid));
  let name = '';
  let username = '';

  onSnapshot(q, (snapshot) => {
    snapshot.forEach((docu) => {
      name = docu.data().name;
      username = docu.data().username;
      createPosts(post, user.uid, name, username);
    });
  });
} */

// Gets all the docs in the Posts collection
/* export function getPosts() {
  const db = getFirestore();
  const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((docu) => {
      const data = docu.data();
      data.key = docu.id;
      posts.push(data);
    });
    posts.map((post) => renderingPosts(post));
  });
} */
