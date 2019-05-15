'use strict';

const asteroidList = document.querySelector('.asteroids');
const king = document.querySelector('li');
asteroidList.removeChild(king);

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

for (let i = 0; i < planetData.length; i++) {
  if (planetData[i].asteroid === true) {
    let newAsteroid = document.createElement('li');
    newAsteroid.className = planetData[i].category;
    newAsteroid.innerText = planetData[i].content;
    asteroidList.appendChild(newAsteroid);
  }
}
