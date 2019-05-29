'use strict';

const iLoveCats = document.querySelector('.i-love-cats');
const submit = document.querySelector('.submit');

const signupYes = document.querySelector('#yes');
const signupNo = document.querySelector('#no');
const dog = document.querySelector('#dog');
const cat = document.querySelector('#cat');
const goldfish = document.querySelector('#goldfish');

window.addEventListener('click', () => {
  if (dog.checked === true || cat.checked === true || goldfish.checked === true) {
    submit.disabled = false;
  }
});

window.addEventListener('click', () => {
  if (signupYes.checked === true) {
    iLoveCats.disabled = false;
  } else if (signupYes.checked === false) {
    iLoveCats.disabled = true;
  }
});

iLoveCats.addEventListener('click', () => {
  alert('Thank you, you\'ve successfully signed up for cat facts');
});

submit.addEventListener('click', () => {
  if (signupYes.checked === false) {
    alert('Sigh, we still added you to the cat facts list');
  } else {
    alert('Thank you, you\'ve successfully signed up for cat facts');
  }
});
