'use strict';

const display = document.getElementsByClassName("display")[0];

// display.innerHTML = 'MAJOM';

let counter = 10;
display.innerHTML = counter;


const timer = setInterval(() => {  
  counter--;
  display.innerHTML = counter;
  if (counter === 0) {
    display.innerHTML = 'Bomb exploded!!!';
    clearInterval(timer);
  }
}, 1000);

const button = document.querySelector('button');

button.addEventListener('click', event => {
  display.innerHTML = 'You defused the motherfucking bomb!';
  clearInterval(timer);
});

    // Create a timeout that will set the display to "Bomb exploded" in 10 seconds
    // If you click on the button set the display to "Bomb defused" and stop the timeout
    // Extra: create an interval which will update the remaining seconds in the display
