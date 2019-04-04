'use strict';

let a: number = 123;
let b: number = 526;

console.log('"a" is ' + a + '.');
console.log('"b" is ' + b + '.');

let c: number = a + b;

a = c - a;
b = c - a;

console.log('"a" is now ' + a + '.');
console.log('"b" is now ' + b + '.');