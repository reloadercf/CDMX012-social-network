import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeSection = document.createElement('section');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  HomeSection.classList.add('container');
  buttonLogin.classList.add('btnCTA');
  buttonRegister.classList.add('btnSecondary');
  buttonRegister.textContent = 'Regístrate';
  buttonLogin.textContent = 'Inicia sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeSection.append(buttonLogin, buttonRegister);
  return HomeSection;
};
