import { onNavigate } from '../main.js';
import { exit } from '../lib/auth.js';
import { CreatePost } from './Post/CreatePost.js';
import { ListPost } from './Post/ListPosts.js';

export const Wall = () => {
  const HomeDiv = document.createElement('div');
  const exitButton = document.createElement('button');
  exitButton.textContent = 'Cerrar sesión';
  exitButton.addEventListener('click', () => {
    exit().then((result) => {
      console.log('Fuera');
    }).catch((err) => {
      console.log('mal');
    });
  });

  HomeDiv.append(CreatePost(), ListPost(), exitButton);
  return HomeDiv;
};
