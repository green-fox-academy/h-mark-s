'use strict';

const scrollThreshold = 300;

for (let i = 0; i < (Math.floor(Math.random() * 1000)); i++) {
  let div = document.createElement('div');
  document.body.appendChild(div);
}

const allTheDivs = document.querySelectorAll('div');

allTheDivs.forEach((element) => {
  element.setAttribute('style', `background-color: #${Math.floor(Math.random()*16777215).toString(16)}`);
});

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY > document.body.clientHeight - scrollThreshold) {
    for (let i = 0; i < 10; i++) {
      let div = document.createElement('div');
      document.body.appendChild(div).setAttribute('style', `background-color: #${Math.floor(Math.random()*16777215).toString(16)}`);
    }    
  }  
});
