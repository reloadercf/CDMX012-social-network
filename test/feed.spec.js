/**
 * @jest-environment jsdom
 */
import { feed } from '../src/pages/feed.js';
import { getDoc } from '../src/firebase-imports.js';

jest.mock('../src/firebase-imports.js');

describe('Tests of feed', () => {
  test('render feed', () => {
    const renderFeed = feed();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderFeed);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});

describe('Hamburger menu', () => {
  const feedPage = feed();

  it('Hamburger menu should not exist if hamburger menu is not clicked', () => {
    const hasChild = feedPage.querySelector('#general-container') == null;
    expect(hasChild).toEqual(true);
  });

  it('When clicking hamburger menu it should open the menu', () => {
    getDoc.mockResolvedValue({
      exists: () => true,
      data: () => ({
        name: 'Name1',
        username: 'username1',
        bio: 'texto',
      }),
    });
    const menu = feedPage.querySelector('.config-menu');
    menu.dispatchEvent(new Event('click'));
    const hasChild = feedPage.querySelector('#general-container') != null;
    expect(hasChild).toEqual(true);
  });
});
