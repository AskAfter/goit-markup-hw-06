const btnOrder = document.querySelector('.hero-button');
const modalThumb = document.querySelector('.modal-overlay');
const btnClose = document.querySelector('.modal-close-button');

const modalClasses = modalThumb.classList;

btnOrder.addEventListener('click', addToggle);

btnClose.addEventListener('click', addToggle);

document.addEventListener('keydown', handleKeyPress);

function addToggle() {
  modalClasses.toggle('is-open');
}

function handleKeyPress(event) {
  if (event.key === 'Escape' && modalClasses.contains('is-open')) {
    addToggle();
  }
}
