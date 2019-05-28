'use strict';

const createCandies = document.querySelector('.create-candies');
const buyLollypops = document.querySelector('.buy-lollypops');
const candyMachine = document.querySelector('.candy-machine');

let candies = document.querySelector('.candies');
let lollypops = document.querySelector('.lollypops');
let candiesPerSecond = document.querySelector('.speed');

let numberOfCandies = 1000;
let numberOfLollypops = 0;
let produceRate = 1;

function produceCandy() {
  numberOfCandies += (0.1 * numberOfLollypops) * produceRate;
}

createCandies.addEventListener('click', () => {
  numberOfCandies++;
  candies.innerHTML = Math.floor(numberOfCandies);
});

buyLollypops.addEventListener('click', () => {
  if (numberOfCandies >= 100) {
    numberOfCandies -= 100;
    candies.innerHTML = Math.floor(numberOfCandies);
    numberOfLollypops++;
    lollypops.innerHTML += "🍭";
  }
});

candyMachine.addEventListener('click', () => {
  produceRate *= 10;
});

setInterval(() => {
  produceCandy();
}, 1000);

setInterval(() => {
  candies.innerHTML = Math.floor(numberOfCandies);
  candiesPerSecond.innerHTML = numberOfLollypops * 0.1 * produceRate;
}, 1);
