'use strict';

const nav = document.querySelector('nav');
let imgInspector = document.querySelector('.img-inspector');
let positionY = 0;
let positionX = 0;
let defaultZoom = 200;

nav.addEventListener('click', (event) => {
  const { dataset } = event.target;
  if (dataset.direction === 'in') {
    defaultZoom += 20;
    imgInspector.style["background-size"] = defaultZoom + '%';
  } else if (dataset.direction === 'out') {
    defaultZoom -= 20;
    imgInspector.style["background-size"] = defaultZoom + '%';
  } else if (dataset.direction === 'up') {
    positionY -= 10;
    imgInspector.style["background-position-y"] = positionY + 'px';
  } else if (dataset.direction === 'down') {
    positionY += 10;
    imgInspector.style["background-position-y"] = positionY + 'px';
  } else if (dataset.direction === 'left') {
    positionX -= 10;
    imgInspector.style["background-position-x"] = positionX + 'px';
  } else if (dataset.direction === 'right') {
    positionX += 10;
    imgInspector.style["background-position-x"] = positionX + 'px';
  }
});
