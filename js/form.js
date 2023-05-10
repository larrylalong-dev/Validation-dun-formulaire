// Storing DOM elements
const submitButton = document.querySelector('.btn-submit');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const birthday = document.getElementById('birthdate');
const formerParticipation = document.getElementById('formerParticipation');
const termsOfUse = document.querySelector('input[name = termsOfUse]');
const formSubmit = document.getElementById('form');
const formData = document.querySelector('.formData');
const errorMessage = document.querySelector('.text-control');

// Regex to check input values against
const namePattern = new RegExp(/^[a-zA-Z]{2,}$/);
const emailPattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const formerParticipationPattern = new RegExp(/^[0-9]+$/);

// Event listeners on inputs and corresponding checkValue functions
firstName.addEventListener('input', checkFirstNameValue);
lastName.addEventListener('input', checkLastNameValue);
email.addEventListener('input', checkEmailValue);
birthday.addEventListener('input', checkBirthdayValue);
formerParticipation.addEventListener('input', checkFormerParticipationValue);
termsOfUse.addEventListener('change', checkTermsOfUseValue);

// Event listeners to toggle disable state on form submit button
firstName.addEventListener('input', toggleSubmitButton);
lastName.addEventListener('input', toggleSubmitButton);
email.addEventListener('input', toggleSubmitButton);
birthday.addEventListener('input', toggleSubmitButton);
formerParticipation.addEventListener('input', toggleSubmitButton);
termsOfUse.addEventListener('change', toggleSubmitButton);

// Event listeners : form submission;
formSubmit.addEventListener('submit', submitForm);

// General function to check value : returns boolean
function checkInputValue(inputField, inputValue, inputPattern, errorMessage) {
  let isValid = false;
  if(validateInput(inputPattern, inputValue) === false) {
    displayErrorMessage(inputField, errorMessage);
  } else {
    toggleValidState(inputField);
    isValid = true;
  }
  return isValid;
}

// Checks value against RegEx Pattern
function validateInput(regexPattern, inputValue) {
  return regexPattern.test(inputValue);
}

function displayErrorMessage(inputField, errorMessage) {
  inputField.parentElement.setAttribute('data-error-visible', 'true');
  inputField.parentElement.setAttribute('data-error', errorMessage);
};

function toggleValidState(inputField) {
  inputField.parentElement.setAttribute('data-error-visible', 'false');
  inputField.parentElement.setAttribute('data-error', '');
};

function checkFirstNameValue() {
  return checkInputValue(
    firstName,
    firstName.value,
    namePattern,
    'Il nous faut au moins deux lettres! (Pas de caractères spéciaux)'
  );
}

function checkLastNameValue() {
  return checkInputValue(
    lastName,
    lastName.value,
    namePattern,
    'Il nous faut au moins deux lettres! (Pas de caractères spéciaux)'
  );
}

function checkEmailValue() {
  return checkInputValue(
    email,
    email.value,
    emailPattern,
    'Exemple: toto@tata.titi',
  );
}

function checkFormerParticipationValue() {
  return checkInputValue (
    formerParticipation,
    formerParticipation.value,
    formerParticipationPattern,
    'Entrez une valeur en chiffres, s\'il vous plaît',
  );
}

function checkTermsOfUseValue() {
  let isInputValid = false;
  if(termsOfUse.checked === false) {
    displayErrorMessage(
      termsOfUse,
      'Vous y êtes presque, cochez la case'
    )
  } else {
    toggleValidState(termsOfUse);
    isInputValid = true
  }
  return isInputValid;
}

function checkBirthdayValue() {
  const date = new Date(birthday.value);
  const yearLimit = new Date(1922, 1, 1);
  let isInputValid = false;
  if (isNaN(date.getTime())) {
    displayErrorMessage(
      birthday,
      'Entrez une date de naissance valide',
    );
  } else {
    toggleValidState(birthday);
    isInputValid = true;
    if (date > Date.now() ) {
      displayErrorMessage(
        birthday,
        'Vous êtes du futur ?',
      );
      isInputValid = false;
    }
    if (date < yearLimit) {
      displayErrorMessage(
        birthday,
        'Désolé, vous devez avoir entre 0 et 100 ans pour participer.',
      );
      isInputValid = false;
    }
  }
  return isInputValid;
};

function toggleSubmitButton() {
  if (
    checkFirstNameValue() === true
    && checkLastNameValue() === true
    && checkEmailValue() === true
    && checkBirthdayValue() === true
    && checkFormerParticipationValue() === true
    && checkTermsOfUseValue() === true
  ) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'true');
  }
}

function submitForm (submitAction) {
  submitAction.preventDefault();
  if (
    checkFirstNameValue() === true
    && checkLastNameValue() === true
    && checkEmailValue() === true
    && checkBirthdayValue() === true
    && checkFormerParticipationValue() === true
    && checkTermsOfUseValue() === true
  ) {
    closeModal();
    displayConfirmation();
  }
}
