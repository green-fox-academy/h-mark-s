'use strict';

let lineCount1: number = 4;
let lineCount2: number = 3;
let diamondUpperHalf: string;
let diamondLowerHalf: string;
let space: string = ' ';
let element: string = '*';

for (let i: number = 0; i < lineCount1; i++) {
    diamondUpperHalf = '';
    for (let j: number = 1; j < lineCount1-i; j++){
        diamondUpperHalf = diamondUpperHalf + space;
    }
    for (let k: number = 1; k <= (2 * i + 1); k++) {
        diamondUpperHalf = diamondUpperHalf + element;
    }
    console.log(diamondUpperHalf);
}

/* for (let l: number = lineCount2; l > 0; l--) {
    diamondLowerHalf = '';
    for (let m: number = 1; m < lineCount2-l; m++) {
        diamondLowerHalf = diamondLowerHalf + space;
    }
    for (let n: number = 1; n <= (2 * l + 1); n++) {
        diamondLowerHalf = diamondLowerHalf + element;
    }
    console.log(diamondLowerHalf);
} */

export {}