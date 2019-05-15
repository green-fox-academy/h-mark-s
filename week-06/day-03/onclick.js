'use strict';

const button = document.querySelector('button');

button.onclick = () => {
  const wholePage = document.querySelector('div');
  wholePage.className = "party";
  wholePage.setAttribute('style', 'background-size: 100%; background-repeat: no-repeat');
}
