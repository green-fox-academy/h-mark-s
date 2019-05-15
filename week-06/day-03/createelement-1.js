'use strict';

const asteroidList = document.querySelector('ul.asteroids');
const newAsteroid1 = document.createElement('li');
const newAsteroid2 = document.createElement('li');

newAsteroid1.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid1);

newAsteroid2.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroid2);

const container = document.querySelector('div.container');
const heading = document.createElement('h1');

heading.textContent = 'I can add elements to the DOM!';
container.appendChild(heading);

const image = document.createElement('img');
image.setAttribute('src', 'https://media.giphy.com/media/LyJ6KPlrFdKnK/giphy.gif');

container.appendChild(image);
