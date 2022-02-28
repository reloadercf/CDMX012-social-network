import { onNavigate } from '../main.js';
import { createUser } from '../lib/auth.js';

export const Register = () => {
  const HomeSection = document.createElement('section');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const buttonHome = document.createElement('button');
  const titleRegister = document.createElement('h3');
  HomeSection.classList.add('container');
  buttonRegister.classList.add('btnCTA');
  buttonHome.classList.add('btnSecondary');
  inputEmail.type = 'email';
  inputPassword.type = 'password';
  buttonRegister.innerText = 'Registrar';
  inputEmail.placeholder = ' Escribe tu correo';
  inputPassword.placeholder = ' Escribe tu contraseña';

  titleRegister.textContent = 'Bienvenidx al Register';
  buttonHome.textContent = 'Regresar al Home';
  buttonRegister.addEventListener('click', () => {
    createUser(inputEmail.value, inputPassword.value);
  });
  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeSection.append(titleRegister, inputEmail, inputPassword, buttonRegister, buttonHome);

  return HomeSection;
};
