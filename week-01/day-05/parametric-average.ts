'use strict';

let number: number = 5;
let a: number = 0;

for (var i: number = 1; i <= number; i++){
    a = a + i;
}

console.log('Sum : ' + a);
console.log('Average: ' + a / number);

export {}