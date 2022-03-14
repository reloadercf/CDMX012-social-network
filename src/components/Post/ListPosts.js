import { onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import { refPost, auth } from '../../lib/post.js';
import { DeletePost } from './DeletePost.js';

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
      const iconsContainer = document.createElement('section');
      const btnDelete = document.createElement('button');
      const btnEdit = document.createElement('button');
      const h4 = document.createElement('h4');
      postContainer.classList.add('container');
      iconsContainer.classList.add('iconsContainer');
      imgDelete.src = 'https://img.icons8.com/external-outline-astudio/32/ff2f5f/external-delete-office-stuff-outline-astudio.png';
      imgEdit.src = 'https://img.icons8.com/pastel-glyph/64/ff2f5f/edit--v1.png';
      imgEdit.classList.add('icon');
      imgDelete.classList.add('icon');
      btnDelete.classList.add('btnDelete');
      btnEdit.classList.add('btnEdit');
      btnDelete.value = doc.id;
      btnEdit.value = doc.id;
      btnDelete.appendChild(imgDelete);
      btnEdit.appendChild(imgEdit);
      h4.textContent = doc.data().text;
      iconsContainer.append(btnEdit, btnDelete);
      postContainer.append(h4);
      PostListSection.appendChild(postContainer);
      if (auth.currentUser.email === doc.data().email) {
        postContainer.append(iconsContainer);
      }
    });
    const arrayBtnsDelete = document.querySelectorAll('.btnDelete');
    DeletePost(arrayBtnsDelete);
  });
  return PostListSection;
};
