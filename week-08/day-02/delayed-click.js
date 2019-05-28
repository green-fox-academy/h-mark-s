'use strict';

const button = document.querySelector('button');
let p = document.createElement('p');
document.body.appendChild(p);

button.addEventListener('click', () => {
  document.querySelector('p').innerHTML = '';
  setTimeout(() => {
    document.querySelector('p').innerHTML = '2 seconds ellapsed';

  }, 2000);
});
