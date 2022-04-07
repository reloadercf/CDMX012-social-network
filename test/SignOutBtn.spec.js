/* eslint-disable jest/no-focused-tests */
/**
 * @jest-environment jsdom
 */
import { onNavigate } from '../src/app.js';
import { getDoc } from '../src/firebase-imports.js';

jest.mock('../src/firebase-imports.js');

describe.only('Sign out btn in hamburger menu', () => {
  it.only('When clicking "Sign out" in should navigate to homepage', async () => {
    document.body.innerHTML = '<div id="root"></div>';

    onNavigate('/home');
    expect(window.location.pathname).toBe('/home'); // nos aseguramos q estemos en home

    getDoc.mockResolvedValue({
      exists: () => true,
      data: () => ({
        name: 'Name1',
        username: 'username1',
        bio: 'texto',
      }),
    }); // Mockeamos getDoc ya que queremos un comporamiento especifico para este test

    const hamMenu = document.querySelector('.config-menu');
    hamMenu.dispatchEvent(new Event('click')); // click para abrir menú de hamburguesa
    const signout = document.querySelector('#out');
    signout.dispatchEvent(new Event('click')); // click para cerrar sesion dentro de menú
    // eslint-disable-next-line no-use-before-define
    await tick(); // Se da tiempo para que la promesa (en este caso la de signOut) se resuelva

    function tick() {
      return new Promise((resolve) => {
        setTimeout(resolve, 0);
      });
    }

    const hasChild2 = document.querySelector('.lp-content') != null; // it will return true if lp-content exists in div root
    expect(hasChild2).toBe(true);
  });
});
