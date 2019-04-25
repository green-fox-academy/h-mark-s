'use strict';

function anagram(a: string, b: string): boolean {
  let x: string = a.split('').sort().join('');
  let y: string = b.split('').sort().join('');
  return x === y;
}

console.log(anagram('mark', 'kram'))

export { anagram };
