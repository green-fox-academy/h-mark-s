'use strict';

function reverse (input:string): string {
  return input.split('').reverse().join('');
}

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
console.log(reverse(reversed));

export = reverse;