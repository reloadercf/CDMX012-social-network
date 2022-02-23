import { onNavigate } from '../main.js';
import { createUser } from '../lib/auth.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const buttonHome = document.createElement('button');

  inputEmail.type = 'email';
  inputPassword.type = 'password';
  buttonRegister.innerText = 'Registrar';
  inputEmail.placeholder = 'Escribe tu email';
  inputPassword.placeholder = 'Escribe tu contraseña';

  HomeDiv.textContent = 'Bienvenida al Register';
  buttonHome.textContent = 'Regresar al Home';
  buttonRegister.addEventListener('click', () => {
    createUser(inputEmail.value, inputPassword.value);
  });
  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.append(buttonHome, inputEmail, inputPassword, buttonRegister);

  return HomeDiv;
};
