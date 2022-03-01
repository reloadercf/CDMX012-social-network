import { onNavigate } from '../main.js';
import { exit } from '../lib/auth.js';
import { CreatePost } from './Post/CreatePost.js';
import { ListPost } from './Post/ListPosts.js';

export const Wall = () => {
  const HomeDiv = document.createElement('div');
  const exitImg = document.createElement('img');
  exitImg.src = 'https://img.icons8.com/external-sbts2018-outline-sbts2018/58/ff2f5f/external-logout-social-media-basic-1-sbts2018-outline-sbts2018.png';
  exitImg.classList.add('logout');
  exitImg.addEventListener('click', () => {
    exit().then((result) => {
      console.log('Fuera');
    }).catch((err) => {
      console.log('mal');
    });
  });

  HomeDiv.append(CreatePost(), ListPost(), exitImg);
  return HomeDiv;
};
