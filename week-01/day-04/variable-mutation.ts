'use strict';

let a: number = 3;
a = a + 10;

console.log(a);

let b: number = 100;
b = b - 7;

console.log(b)

let c: number = 44;
c = c * 2;

console.log(c);

let d: number = 125;
d = d / 5;

console.log(d);

let e: number = 8;
e = e **3;

console.log(e);

let f1: number = 100000;
let f2: number = 345;

console.log(Boolean(f1 > f2));

let g1: number = 350;
let g2: number = 200;

console.log(Boolean((g2 * 2) > g1));

let h: number = 1357988018575474;

console.log(Boolean(h % 11 === 0));

let i1: number = 10;
let i2: number = 3;

console.log(Boolean(i1 > (i2**2) && i1 < i2**3));

let j: number = 1521;

console.log(Boolean((j % 3) === 0 || (j %5) === 0));