import { onNavigate } from '../main.js';
import { LoginEmail } from '../lib/auth.js';

export const Login = () => {
  const HomeDiv = document.createElement('div');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const buttonHome = document.createElement('button');

  inputEmail.type = 'email';
  inputPassword.type = 'password';
  buttonLogin.innerText = 'Registrar';
  inputEmail.placeholder = 'Escribe tu email';
  inputPassword.placeholder = 'Escribe tu contraseña';
  HomeDiv.textContent = 'Bienvenida al Login';
  buttonHome.textContent = 'Regresar al Home';

  buttonLogin.addEventListener('click', () => {
    LoginEmail(inputEmail.value, inputPassword.value).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      onNavigate('/wall');
      // ...
    }).catch((error) => {
      console.log(error);
    });
  });
  HomeDiv.appendChild(buttonHome);
  HomeDiv.append(buttonHome, inputEmail, inputPassword, buttonLogin);
  return HomeDiv;
};
