const menu = document.querySelector('.menu');
const note = document.querySelector('.note');
const textarea = document.querySelector('textarea')
const darkThemeButton = document.querySelector('.dark_theme');

darkThemeButton.addEventListener('click', () => {
  menu.classList.toggle('dark_theme');
  note.classList.toggle('dark_theme');
  textarea.classList.toggle('dark_theme');
});

const themeToggle = document.querySelector('.dark_theme');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light Theme';
  } else {
    themeToggle.textContent = 'Dark Theme';
  }
});