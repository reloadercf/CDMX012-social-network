import { createPost } from '../../lib/post.js';

export const CreatePost = () => {
  const PostSection = document.createElement('section');
  const textArea = document.createElement('textArea');
  const buttonSendPost = document.createElement('button');

  PostSection.classList.add('container');
  buttonSendPost.textContent = 'Publicar';
  buttonSendPost.classList.add('btnCTA');
  buttonSendPost.addEventListener('click', () => {
    createPost(textArea.value).then(() => {
      textArea.value = '';
    }).catch((err) => {
      console.log('no se publico', err);
    });
  });
  PostSection.append(textArea, buttonSendPost);

  return PostSection;
};
