'use strict';

let a: number = 123;
let b: number = 526;

console.log('"a" is ' + a + '.');
console.log('"b" is ' + b + '.');

[a,b] = [b,a];

console.log('"a" is now ' + a + '.');
console.log('"b" is now ' + b + '.');