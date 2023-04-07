const menu = document.querySelector('.menu');
const note = document.querySelector('.note');
const textarea = document.querySelector('.textarea')
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

const cancelB = document.querySelector('.cancel');
const saveB = document.querySelector('.save');
const text = document.querySelector('.textarea');
const newNoteB = document.querySelector('.new_note');

cancelB.addEventListener('click', () =>{
    text.classList.add('hid');
    saveB.classList.add('hid');
    cancelB.classList.add('hid');
    text.classList.remove('show');
    saveB.classList.remove('show');
    cancelB.classList.remove('show');
});

newNoteB.addEventListener('click', () => {
    text.classList.add('show');
    saveB.classList.add('show');
    cancelB.classList.add('show');
  
    if (text.value) {
      text.value = '';
    }
  });

const notes = document.querySelector('.notes');
const notesArray = [];
  
  saveB.addEventListener('click', () => {
    const title = prompt('Enter the title for your note:');
    if (title) {
      const note = {
        title,
        body: text.value,
      };
      notesArray.push(note);
      const li = document.createElement('li');
      li.textContent = note.title;
      notes.appendChild(li);
    }
  });

const sidebar = document.querySelector('.menu ul');

sidebar.addEventListener('click', (event) => {
  const clickedItem = event.target;
  const clickedTitle = clickedItem.textContent;

  const clickedNote = notesArray.find(note => note.title === clickedTitle);

  if (clickedNote) {
    text.value = clickedNote.body;
  }
});
