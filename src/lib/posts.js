/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
import {
  getFirestore, doc, setDoc, getAuth, /* onAuthStateChanged, */ collection,
  query, where, onSnapshot, orderBy, serverTimestamp,
} from '../firebase-imports.js';
import { app } from './firebase-config.js';
import { createPosts } from '../components/renderingPosts.js';
/* import { onNavigate } from '../app.js'; */

// Saves the data from the post just created in the 'posts' collection
export async function saveNewPostData(postsForm) { // TEST: setDoc .tohavebeencalled
  const db = getFirestore();

  const auth = getAuth(app); // current user
  const user = auth.currentUser;

  const today = new Date();
  const dateToday = `${today.getDate()}/${(today.getMonth() + 1)}/${today.getFullYear()}`;

  try {
    // Creates a new doc in the posts coleccion with the new input
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
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// Gets the original poster(OP) data and renders all the posts
function renderingPosts(post) { // TEST: createPosts to have been called, mockear q
  const auth = getAuth(app); // current user
  const user = auth.currentUser;

  // Cleans the post area
  const postsArea = document.querySelector('#postsArea');
  postsArea.innerHTML = '';

  const db = getFirestore();
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
}

export function getPosts() { // Gets all the docs in the Posts collection
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
}
