'use strict';

// Find the greatest common divisor of two numbers using recursion.

function gcd(a: number, b: number): number {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
} 

console.log(gcd(54,24));
