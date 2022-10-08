import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
  
};

const formData = {
  email: '',
  message: '',
};
let currentFormData = formData;

resultForm();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


function onFormInput(e) {
  
  const value = JSON.stringify(currentFormData = {
    ...currentFormData,
    [e.target.name]: e.target.value,
  });
  localStorage.setItem(STORAGE_KEY, value);
}

function onFormSubmit(e) {
  e.preventDefault();
  
  const value = JSON.stringify(FormData);
  localStorage.setItem(STORAGE_KEY, value);
  refs.form.reset();
  localStorage.removeItem('feedback-form-state');
}


function resultForm() {
  const { email, message } = populateMessageEmail();
  refs.input.value = email;
  refs.textarea.value = message;
}

function onBtnSubmit() {
  if (refs.textarea.value === '' || refs.input.value === '') {
    return alert('Your form has empty fields. Add information and try again.');
  }
  console.log(currentFormData);
}
