/* eslint-disable import/no-cycle */
import { saveNewPostData, getPosts } from '../lib/posts.js';
import { slideshow } from '../components/slideshow.js';
import { showAndHideItems, goToTop } from '../components/ui.js';
import { menu } from '../components/menu.js';

export const feed = () => {
  const readingPage = document.createElement('div');
  readingPage.setAttribute('class', 'readingPage');

  // Header section
  const header = document.createElement('header');
  header.setAttribute('class', 'feed-header');

  const logoTitle = document.createElement('div');
  logoTitle.setAttribute('class', 'logo-title');

  const logo = document.createElement('img');
  logo.setAttribute('class', 'logo-book-feed');
  logo.setAttribute('src', './assets/logo sin fondo 1.png');
  logo.setAttribute('alt', 'logo book reads');

  const bookreads = document.createElement('img');
  bookreads.setAttribute('class', 'titleBookReads-feed');
  bookreads.setAttribute('src', './assets/bookreads-white-logo.png');
  bookreads.setAttribute('alt', 'titleBookReads');

  logoTitle.append(logo, bookreads);

  const configMenu = document.createElement('img');
  configMenu.setAttribute('class', 'config-menu');
  configMenu.setAttribute('src', './assets/white-config-icon.png');
  configMenu.setAttribute('alt', 'configuration menu');

  configMenu.addEventListener('click', () => {
    const body = document.body;
    body.style.overflow = 'hidden';
    readingPage.append(menu());
  });

  header.append(logoTitle, configMenu);

  // feed content section
  const feedContent = document.createElement('div');
  feedContent.setAttribute('class', 'feed-content');

  // book suggestions h2
  const suggestions = document.createElement('div');
  const bookSuggest = document.createElement('h2');
  bookSuggest.setAttribute('class', 'bookSuggest');
  bookSuggest.innerHTML = 'Book suggestions:';
  suggestions.append(bookSuggest);

  // Create a new post section
  const makeNewPost = document.createElement('div');
  makeNewPost.setAttribute('class', 'make-new-post');
  makeNewPost.setAttribute('id', 'makeNewPost');
  makeNewPost.innerHTML = "What's on your mind?";

  const readingForm = document.createElement('form');
  readingForm.setAttribute('class', 'reading-form');
  readingForm.setAttribute('id', 'readingForm');

  const insertReadingTitle = document.createElement('div');
  insertReadingTitle.setAttribute('class', 'reading-area');

  const readingTitle = document.createElement('div');
  readingTitle.innerHTML = '<label for="reading" class="reading">Reading:</label>';

  const readingBook = document.createElement('input');
  readingBook.setAttribute('class', 'book-title');
  readingBook.setAttribute('id', 'bookTitle');
  readingBook.setAttribute('type', 'text');
  readingBook.setAttribute('placeholder', 'What are you reading?');
  readingBook.setAttribute('name', 'bookTitle');

  insertReadingTitle.append(readingTitle, readingBook);

  const readingDescription = document.createElement('textarea');
  readingDescription.setAttribute('class', 'post-content');
  readingDescription.setAttribute('name', 'postContent');
  readingDescription.setAttribute('placeholder', "What's on your mind?");

  const newPostBtn = document.createElement('input');
  newPostBtn.setAttribute('type', 'submit');
  newPostBtn.setAttribute('value', 'Share');
  newPostBtn.setAttribute('class', 'new-post-button');
  newPostBtn.setAttribute('id', 'newPostButton');

  readingForm.append(insertReadingTitle, readingDescription, newPostBtn);

  // Posts section
  const postsArea = document.createElement('div');
  postsArea.setAttribute('class', 'posts');
  postsArea.setAttribute('id', 'postsArea');

  const slideshowElement = slideshow();
  feedContent.append(suggestions, slideshowElement, makeNewPost, readingForm, postsArea);
  readingPage.append(header, feedContent);

  document.addEventListener('DOMContentLoaded', getPosts()); // Averiguar cómo ordenar los posts, más reciente primero

  logoTitle.addEventListener('click', () => {
    goToTop();
  });

  makeNewPost.addEventListener('click', () => {
    showAndHideItems(readingForm, makeNewPost);
  });

  newPostBtn.addEventListener('click', (e) => {
    e.preventDefault();
    saveNewPostData(readingForm);
    showAndHideItems(makeNewPost, readingForm);
    console.error('una vez');
  });

  return readingPage;
};
