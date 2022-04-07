/**
 * @jest-environment jsdom
 */
import { genericModal } from '../src/components/genericModal.js';

jest.mock('../src/firebase-imports.js');

describe('the function giveLike modify the list of likes', () => {
  test('render a modified list', () => {
    const funOne = () => {};
    const param = [];
    const textModal = '';
    const elements = [funOne, param, textModal];
    genericModal(...elements);
    const modal = document.querySelector('modal');
    expect(modal).toBeDefined();
  });
});

describe('closebtn closes the modal', () => {
  test('render a closed modal on click', () => {
    const funOne = () => {};
    const param = [];
    const textModal = '';
    const elements = [funOne, param, textModal];
    genericModal(...elements);
    const btn = document.querySelector('#close-button');
    btn.dispatchEvent(new Event('click'));
    expect(btn.textContent).toBe('x');
  });
});

describe('acceptbtn access to delete post function', () => {
  test('access to the delete post function on click', () => {
    const funOne = () => {};
    const param = [];
    const textModal = '';
    const elements = [funOne, param, textModal];
    genericModal(...elements);
    const btn = document.querySelector('#accept-btn');
    btn.dispatchEvent(new Event('click'));
    expect(btn.textContent).toBe('Yes');
  });
});

describe('if modal es igual a nulo', () => {
  test('que el modal sea igual a nulo', () => {
    const funOne = () => {};
    const param = [];
    const textModal = '';
    const elements = [funOne, param, textModal];
    genericModal(...elements);
    const modal = document.querySelector('modal');
    expect(modal).toBe(null);
  });
});
