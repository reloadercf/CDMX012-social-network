/**
 * @jest-environment jsdom
 */
import { like } from '../src/components/like.js';
import { giveLike, dislike } from '../src/lib/likes.js';

jest.mock('../src/firebase-imports.js');

describe('Tests of like', () => {
  test('render like', () => {
    const renderlike = like();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderlike);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
  test('cuando click es true', () => {
    const elements = [true, 2, 'saraiDos', 'sarai12', ['mario', 'charlotte']];
    const div = like(...elements);
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(div);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
  test('cuando click es false', () => {
    const elements = [false, 2, 'saraiDos', 'sarai12', ['mario', 'charlotte']];
    const div = like(...elements);
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(div);
    expect(rootDiv.innerHTML.includes('./assets/like.png')).toBe(true);
  });
});

describe('the function giveLike modify the list of likes', () => {
  test('render a modified list', () => {
    const elements = ['charles', 'charles2022', ['maria', 'benny']];
    giveLike(...elements);
  });
});

describe('the function dislike modify the list of likes', () => {
  test('render a modified list', () => {
    const elements = ['charles', 'charles2022', ['maria', 'benny']];
    dislike(...elements);
  });
});

describe('conditional on click to be true', () => {
  test('render a modified list', () => {
    const elements = [false, 2, 'saraiDos', 'sarai12', ['mario', 'charlotte']];
    const div = like(...elements);
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(div);
    const btn = document.querySelector('#like-btn');
    btn.dispatchEvent(new Event('click'));
    expect(rootDiv.innerHTML.includes('./assets/heart.png')).toBe(true);
  });
});

describe('conditional on click also to be true', () => {
  test('render a modified list', () => {
    const elements = [true, 2, 'saraiDos', 'sarai12', ['mario', 'charlotte']];
    const div = like(...elements);
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(div);
    const btn = document.querySelector('#like-btn');
    btn.dispatchEvent(new Event('click'));
    expect(rootDiv.innerHTML.includes('./assets/like.png')).toBe(true);
  });
});
