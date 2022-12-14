const frmContact = document.getElementById('frmContact');
const frmMessage = document.querySelector('.form__message');
const { name, email, description } = frmContact.elements;
const err = {
  EMAIL_LOWERCASE: 'Email address should be lower case.',
};

const showMessage = (isError, message) => {
  frmMessage.classList.remove('d-none');
  if (isError) {
    frmMessage.classList.remove('form__valid');
    frmMessage.classList.add('form__error');
  } else {
    frmMessage.classList.add('form__valid');
    frmMessage.classList.remove('form__error');
  }
  frmMessage.textContent = message;
};

frmContact.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    showMessage(false, 'Form validation succeeded.');
    frmContact.submit();
    return;
  }

  showMessage(true, err.EMAIL_LOWERCASE);
});

const formValues = JSON.parse(localStorage.getItem('contactForm')) || {
  name: '',
  email: '',
  desc: '',
};

const loadInputValuesStored = () => {
  name.value = formValues.name;
  email.value = formValues.email;
  description.value = formValues.desc;
};

loadInputValuesStored();

const saveOnLocalStorage = () => {
  localStorage.setItem('contactForm', JSON.stringify(formValues));
};

name.addEventListener('input', () => {
  formValues.name = name.value;
  saveOnLocalStorage();
});
email.addEventListener('input', () => {
  formValues.email = email.value;
  saveOnLocalStorage();
});
description.addEventListener('input', () => {
  formValues.desc = description.value;
  saveOnLocalStorage();
});