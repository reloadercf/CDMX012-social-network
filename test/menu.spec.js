/**
 * @jest-environment jsdom
 */
import { menu } from '../src/components/menu.js';
import { getDoc } from '../src/firebase-imports.js';

jest.mock('../src/firebase-imports.js');

describe('Close btn in hamburger menu', () => {
  document.body.innerHTML = '<div id="root"><div class="readingPage"></div></div>';
  getDoc.mockResolvedValue({
    exists: () => true,
    data: () => ({
      name: 'Name1',
      username: 'username1',
      bio: 'texto',
    }),
  });
  const feedDiv = document.querySelector('.readingPage');
  const menuHam = menu();
  feedDiv.append(menuHam);
  const closeBtn = document.querySelector('#close-img');
  it('When clicking "x" in hamburger menu it should close the menu', () => {
    closeBtn.dispatchEvent(new Event('click'));
    const hasChild = feedDiv.querySelector('#general-container') == null;
    expect(hasChild).toEqual(true);
  });
});
