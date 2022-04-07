/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
export const getFirestore = () => Promise.resolve({});
export const doc = (db, collection, docId) => ({ db, collection, docId });
export const setDoc = () => Promise.resolve({});
export const getDoc = jest.fn(
  () => {
    const info = {
      exists: () => false,
    };

    return Promise.resolve(info);
  },
);

const user = {
  currentUser: {
    uid: 'saraiG',
  },
};
// eslint-disable-next-line no-unused-vars
export const getAuth = (app) => user;
export const onAuthStateChanged = () => Promise.resolve({});
export const initializeApp = () => Promise.resolve({});
export const createUserWithEmailAndPassword = () => Promise.resolve({});
export const signInWithPopup = jest.fn((auth, provider) => Promise.resolve({}));
export class GoogleAuthProvider {
  constructor() {
    this.name = 'google';
  }
}
export class FacebookAuthProvider {
  constructor() {
    this.name = 'fb';
  }
}
export class GithubAuthProvider {
  constructor() {
    this.name = 'git';
  }
}
export const getAdditionalUserInfo = () => Promise.resolve({});
export const signInWithEmailAndPassword = () => Promise.resolve({});
export const deleteDoc = () => Promise.resolve({});
export const query = () => Promise.resolve({});
export const where = () => Promise.resolve({});
export const onSnapshot = () => Promise.resolve({});
export const updateDoc = () => Promise.resolve({}); // updateDoc regresa Promise<void>
export const orderBy = () => Promise.resolve({});
export const serverTimestamp = () => Promise.resolve({});
export const collection = () => Promise.resolve({});
// eslint-disable-next-line no-unused-vars
export const signOut = jest.fn((auth) => Promise.resolve());
