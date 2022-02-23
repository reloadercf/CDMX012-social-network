import { onNavigate } from '../main.js';
import { exit } from '../lib/auth.js';

export const Wall = () => {
  const HomeDiv = document.createElement('div');
  const messagePSuccess = document.createElement('p');
  const exitButton = document.createElement('button');

  messagePSuccess.textContent = 'Bienvenido';
  exitButton.textContent = 'Cerrar sesión';
  exitButton.addEventListener('click', () => {
    exit().then((result) => {
      console.log('Fuera');
    }).catch((err) => {
      console.log('mal');
    });
  });

  HomeDiv.append(messagePSuccess, exitButton);
  return HomeDiv;
};
