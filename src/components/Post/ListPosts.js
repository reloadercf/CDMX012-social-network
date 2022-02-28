import { onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import { refPost } from '../../lib/post.js';

export const ListPost = () => {
  const PostListSection = document.createElement('section');
  PostListSection.classList.add('section-post-list');
  onSnapshot(refPost(), (querySnapshot) => {
    while (PostListSection.firstChild) {
      PostListSection.removeChild(PostListSection.firstChild);
    }
    querySnapshot.forEach((doc) => {
      const h3 = document.createElement('h3');
      h3.textContent = doc.data().text;
      PostListSection.appendChild(h3);
    });
  });
  return PostListSection;
};
