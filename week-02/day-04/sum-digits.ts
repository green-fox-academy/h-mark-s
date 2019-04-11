'use strict';

// Given a non-negative int n, return the sum of its digits recursively (no loops).
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
// while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigit (n: number): number {
  let x: number = n % 10;
  if (n >= 10) {
    return Math.floor(x + sumDigit(n/10));}
  else {
    return Math.floor(n)
  }
}

console.log(sumDigit(4560));
