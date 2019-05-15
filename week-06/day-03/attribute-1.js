'use strict';

const image = document.querySelector('img');

console.log(image.getAttribute('src'));

image.setAttribute('src', 'https://i.ytimg.com/vi/CQ85sUNBK7w/maxresdefault.jpg');
image.setAttribute('height', '150');
image.setAttribute('width', 'auto');

const link = document.querySelector('a');
link.setAttribute('href', 'https://www.greenfoxacademy.com/');

const secondButton = document.getElementsByClassName('this-one')[0];
secondButton.innerHTML = `Don't click me!`;