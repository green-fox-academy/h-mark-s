'use strict';

const section = document.getElementsByTagName('section')[0];

for (let i = 1; i <= 100; i++) {
  section.innerHTML += ('<div class="number-box">' + i + '</div>');
}

const isPrime = (number) => { 
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for(let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    } return true;  
  }
}

const addPrimeClass = (element) => {
  if (isPrime(Number(element.innerHTML)) === true) {
    element.classList.add("prime");
  } else {
    element.classList.add("not-prime");
  }
}

// const toAll = (elements, callback) => {
//   for (let i = 0; i < elements.length; i++) {
//     setTimeout(() => {
//       callback(elements[i]);
//     }, i * 1000);
//    }
// }

const toAll = (elements, callback) => {
  let counter = 0;
  let counting = setInterval(() => {
    callback(elements[counter]);
    counter++;
    if (counter === 100) {
      clearInterval(counter);
    }
  }, 1000);
}

// const addClass = (elements, index) => {
//   if (isPrime(index) === true) {
//     elements.classList.add("prime");
//   } else {
//     elements.classList.add("not-prime");
//   }
// }

// const mapWith = (elements, callback) => {
//   for (let i = 0; i < elements.length; i++) {
//     callback(elements[i], i + 1);
//   }
// }

// mapWith(document.getElementsByClassName("number-box"), addClass);


toAll(document.getElementsByClassName("number-box"), addPrimeClass);

// toAll(document.getElementsByClassName("number-box"), addPrimeClass);


          // 1: generate 100 divs to the <section> element and add index numberbers to it as the element's textContent
          // 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
          // 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
          //  - the timer should fire every 100ms
          //  - the timer should stop when there are no more elements left to be colored
