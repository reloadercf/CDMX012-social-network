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
      const postContainer = document.createElement('section');
      const imgEdit = document.createElement('img');
      const imgDelete = document.createElement('img');
      const iconsContainer = document.createElement('figure');
      postContainer.classList.add('container');
      imgDelete.src = 'https://img.icons8.com/external-outline-astudio/32/ff2f5f/external-delete-office-stuff-outline-astudio.png';
      imgEdit.src = 'https://img.icons8.com/pastel-glyph/64/ff2f5f/edit--v1.png';
      imgEdit.classList.add('icon');
      imgDelete.classList.add('icon');
      const h3 = document.createElement('h4');
      h3.textContent = doc.data().text;
      iconsContainer.append(imgEdit, imgDelete);
      postContainer.append(h3, iconsContainer);
      PostListSection.appendChild(postContainer);
    });
  });
  return PostListSection;
};
