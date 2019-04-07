'use strict';

const lineCountSquare: number = 6;
const outerSquare: string = '%%%%%%';
const insideSquare: string = '%    %';

console.log(outerSquare);
for (let i: number = 0; i < (lineCountSquare -2); i++) {
    console.log(insideSquare)
}
console.log(outerSquare);