import { onNavigate } from '../main.js';
import { LoginEmail } from '../lib/auth.js';

export const Login = () => {
  const HomeSection = document.createElement('section');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const buttonHome = document.createElement('button');
  const titleLogin = document.createElement('h3');
  HomeSection.classList.add('container');
  buttonLogin.classList.add('btnCTA');
  buttonHome.classList.add('btnSecondary');
  inputEmail.type = 'email';
  inputPassword.type = 'password';
  buttonLogin.innerText = 'Entrar';
  inputEmail.placeholder = 'Escribe tu correo';
  inputPassword.placeholder = 'Escribe tu contraseña';
  titleLogin.textContent = 'Bienvenidx al Login';
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
  HomeSection.appendChild(buttonHome);
  HomeSection.append(titleLogin, inputEmail, inputPassword, buttonLogin,buttonHome);
  return HomeSection;
};
