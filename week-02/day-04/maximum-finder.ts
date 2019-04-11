'use strict';

// Write a function that finds the largest element of an array using recursion.

let myArray: number[] = [1, 33, 2, 3, 91, 4, 5, 576];

function largestInArray (array: number[]): number {
  if (array.length === 1) {
    return array[0];
  } else {
    if (array[0] < array[1]) {
      array.splice (0, 1);
    } else {
      array.splice (1, 1);
      
    }
  } return largestInArray(array)
}

console.log(largestInArray(myArray));
