'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

let num: number;

function divide (num: number) {
  try {
    if (num === 0) {
      throw new Error ('fail');
    }
    console.log(10 / num);
  }catch (e) {
    console.log(e.message);
  }
}

divide(2);
divide(0);