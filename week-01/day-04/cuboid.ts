'use strict';

let a: number = 10;
let b: number = 10;
let c: number = 10;

let SurfaceArea: number = 2 * (a * b + a * c + b * c);
let Volume: number = a * b * c;

console.log('Surface Area: ' + SurfaceArea);
console.log('Volume: ' + Volume);

export {}