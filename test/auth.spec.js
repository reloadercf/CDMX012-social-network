/**
 * @jest-environment jsdom
 */
import { signUpGoogle, signUpFacebook, signUpGithub } from '../src/lib/auth.js';
import { signInWithPopup } from '../src/firebase-imports.js';

jest.mock('../src/firebase-imports.js');

document.body.innerHTML = '<div id="root"></div>';

describe('Sign up with Google', () => {
  test('Successful sign up process', async () => {
    signInWithPopup.mockResolvedValue();
    const createAcc = await signUpGoogle();
    expect(createAcc).toBe(true);
  });

  test('Failed sign up process', async () => {
    signInWithPopup.mockRejectedValue();
    const createAcc = await signUpGoogle();
    expect(createAcc).toBe(false);
  });
});

describe('Sign up with Facebook', () => {
  test('Successful sign up process', async () => {
    signInWithPopup.mockResolvedValue();
    const createAcc = await signUpFacebook();
    expect(createAcc).toBe(true);
  });

  test('Failed sign up process', async () => {
    signInWithPopup.mockRejectedValue();
    const createAcc = await signUpFacebook();
    expect(createAcc).toBe(false);
  });
});

describe('Sign up with GitHub', () => {
  test('Successful sign up process', async () => {
    signInWithPopup.mockResolvedValue();
    const createAcc = await signUpGithub();
    expect(createAcc).toBe(true);
  });

  test('Failed sign up process', async () => {
    signInWithPopup.mockRejectedValue();
    const createAcc = await signUpGithub();
    expect(createAcc).toBe(false);
  });
});
