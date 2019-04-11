'use strict';

// Given a string, compute recursively (no loops) a new string
// where all the lowercase 'x' chars have been changed to 'y' chars.


function recurString (input: string): string {
  if (input.indexOf('x') === -1) {
    return input;
  } else {
    let x: string = input.substring(0, input.indexOf('x'));
    let y: string = input.substring(input.indexOf('x') + 1, input.length);
    input = x + 'y' + y;
    return recurString(input);
  }
}

console.log(recurString('abcdexXfghxixxx')) 
