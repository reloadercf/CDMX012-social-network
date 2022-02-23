import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';
import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';
import { Wall } from './components/Wall.js';

const rootMain = document.getElementById('root');

const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
  '/wall': Wall,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootMain.firstChild) {
    rootMain.removeChild(rootMain.firstChild);
  }

  rootMain.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  while (rootMain.firstChild) {
    rootMain.removeChild(rootMain.firstChild);
  }
  rootMain.appendChild(routes[window.location.pathname]());
};

rootMain.appendChild(component());

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    onNavigate('/wall');
    // ...
  } else {
    onNavigate('/');
  }
});
