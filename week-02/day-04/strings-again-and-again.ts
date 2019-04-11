'use strict';

// Given a string, compute recursively a new string
// where all the adjacent chars are now separated by a *

let starPosition: number = 1;

function separateByStar (input: string): string {
  if (input.lastIndexOf('*') === input.length - 2) {
    return input;
  } else {
    let x: string = input.substring(0, starPosition);
    let y: string = input.substring(starPosition, input.length);
    input = x + '*' + y;
    starPosition = starPosition + 2;
    return separateByStar(input);
  }
}

console.log(separateByStar('emfdsalfdsanjklawergtbn'))
