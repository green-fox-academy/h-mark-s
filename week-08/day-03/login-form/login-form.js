'use strict';

const img = document.querySelector('img');
const password = document.querySelector('#password');
const submit = document.querySelector('button');
const forgottenPassword = document.querySelector('#forgotten');


img.addEventListener('click', () => {
  if (password.type === "password") {
    password.type = "text";
    img.src = "eye-open.svg";
  } else if (password.type === "text") {
    password.type = "password";
    img.src = "eye-closed.svg";
  }
});

submit.addEventListener('click', () => {
  alert('You\'ve been pwned!')
});

forgottenPassword.addEventListener('click', () => {
  alert('What password? This is only a mockup you dumbass!')
});
