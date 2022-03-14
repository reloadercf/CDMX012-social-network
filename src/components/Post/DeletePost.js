import { deletePost } from '../../lib/post.js';

export const DeletePost = (array) => {
  array.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (confirm('¡Vas a borrar tu post! ¿Deseas continuar?')) {
        deletePost(btn.value);
      }
    });
  });
};
