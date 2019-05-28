'use strict';

window.addEventListener('keyup', (event) => {
  console.log(event);
  let h1 = document.querySelector('h1');
  h1.innerHTML = `Last pressed key code is: ${event.keyCode}`;
});

