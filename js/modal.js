// Variables : get modal elements from their classes
const closeMessage = document.getElementById('backToMenu');
const openModalButton = document.querySelectorAll('.modal-btn');
const closeModalButton = document.getElementById('closeModal');
const modalContainer = document.querySelector('.modal-container');
const validationMessage = document.getElementById('validation');

// Event Listeners : Handling opening and close events
openModalButton.forEach(btn => btn.addEventListener('click', openModal));
closeModalButton.addEventListener('click', closeModal);
closeMessage.addEventListener('click', closeConfirmation);

// Functions : displaying/hiding modal and confirmation message
function openModal() {
  modalContainer.style.display = 'flex';
}
function closeModal() {
  modalContainer.style.display = 'none';
}
function displayConfirmation() {
  validationMessage.style.display = 'flex';
}
function closeConfirmation() {
  validationMessage.style.display = 'none';
}


/* TODO: delete and handle with css media queries */
function editNav() {
  const x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += 'responsive';
  } else {
    /* It's a function that changes the class name of the element with the id 'myTopnav' to 'topnav' */
    x.className = 'topnav';
  }
}
