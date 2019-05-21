'use strict';

let gifs = document.getElementsByClassName('gifs')[0];

let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://api.giphy.com/v1/gifs/trending?api_key=rHgU4EJrLqDqGJldFirwRxyjYforF7lc');
myRequest.onload = () => {
  let myData = JSON.parse(myRequest.responseText);
  console.log(myData);
  for (let i = 0; i < 16; i++) {
    gifs.innerHTML += `<img class="gif" src=` + myData.data[i].images['480w_still'].url + `>`;
  }
  let gif = document.getElementsByClassName('gif');
  for (let i = 0; i < gif.length; i++) {
    gif[i].addEventListener('click', () => {
      gif[i].setAttribute('src', myData.data[i].images.original.url);
    });
  }
}

myRequest.send();
