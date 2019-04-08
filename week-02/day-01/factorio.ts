'use strict';

let baseOfFactorial: number = 4;

function factorio(base: number): any {
    if (baseOfFactorial < 0) {
        return 'The number mustn\'t be negative!';
    } else {
    let sum: number = 1;
    for (let i = 1; i <= baseOfFactorial; i++) {
        sum = sum * i;
    }
    return sum;
    }
}

console.log(factorio(baseOfFactorial))