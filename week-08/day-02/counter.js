'use strict';

const button = document.querySelector('button');

button.addEventListener('click', () => {
  let arrayOfList = document.querySelectorAll('li');
  let result = document.querySelector('.result');
  result.innerHTML = arrayOfList.length;
});
