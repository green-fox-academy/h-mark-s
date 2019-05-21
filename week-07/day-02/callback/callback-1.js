'use strict';

const mapWith = (array, callback) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    let x = callback(array[i]);
    output.push(x);
  } return output;
}

const addOne = (number) => {
  return number + 1;
}

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]


const removeSecondLetter = (string) => {
  let modifiedString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      modifiedString += string[i];
    }
  } return modifiedString;
}

const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
