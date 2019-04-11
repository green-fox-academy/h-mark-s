'use strict';

// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function removeXS (input: string): string {
  if (input.indexOf('x') === -1) {
    return input;
  } else {
    let x: string = input.substring(0, input.indexOf('x'));
    let y: string = input.substring(input.indexOf('x') + 1, input.length);
    input = x + y;
    return removeXS(input);
  }
}

let string1: string = 'abcdexXfghxixxx';

console.log(removeXS(string1));
