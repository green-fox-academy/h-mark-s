'use strict';

let counter = 0;
let timePassed = false;
let p = document.querySelector('p');
const button = document.querySelector('button');

setTimeout(() => {
  timePassed = true;
  if (counter >= 3) {
    writeText();
  }
}, 5000);

button.addEventListener('click', () => {
  counter++
  if (timePassed === true && counter >=3) {
    writeText();
  } 
});

function writeText() {
  console.log('FOS');
  p.innerHTML = '5 seconds elapsed and clicked 3 times';
}
