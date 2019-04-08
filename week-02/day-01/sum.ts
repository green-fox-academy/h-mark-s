'use strict';

let addTill: number = 5;

function sum (number: number): number {
    let sum: number = 0;
    for (let i = 1; i <= addTill; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sum(addTill));