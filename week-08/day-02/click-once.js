'use strict';

const button = document.querySelector('button');


// solution 1:

// button.addEventListener('click', (event) => {
//   console.log(Math.floor(Date.now() / 1000));
//   event.target.disabled = true;
// });

// solution 2:

const currentTimestamp = () => {
  console.log(Math.floor(Date.now() / 1000));
  button.removeEventListener('click', currentTimestamp);
};

button.addEventListener('click', currentTimestamp); 
