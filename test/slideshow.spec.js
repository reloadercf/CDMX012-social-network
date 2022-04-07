/**
 * @jest-environment jsdom
 */

import { slideshow } from '../src/components/slideshow';

jest.mock('../src/firebase-imports.js');

describe('Tests of slideshow container', () => {
  test('render slideshow', () => {
    const renderSlideshow = slideshow();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderSlideshow);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});

describe('Tests of slideshow container on click to plus 1', () => {
  test('render slideshow', () => {
    const renderSlideshow = slideshow();
    const btn = renderSlideshow.querySelector('#btnPrev');
    btn.dispatchEvent(new Event('click'));
    expect(btn.textContent).toBeDefined();
  });
});

describe('Tests of slideshow container on click to plus -1', () => {
  test('render slideshow', () => {
    const renderSlideshow = slideshow();
    const btn = renderSlideshow.querySelector('#btnNext');
    btn.dispatchEvent(new Event('click'));
    expect(btn.textContent).toBeDefined();
  });
});
