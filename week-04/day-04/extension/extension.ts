'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  return Math.max(a, b, c);
};

export function median(pool: number[]): number {
  const sortedPool = pool.sort();
  const middleOfPool = Math.floor(sortedPool.length / 2);
  if (sortedPool.length % 2 === 0) {
      return (sortedPool[middleOfPool - 1] + sortedPool[middleOfPool]) / 2;
  }
  return sortedPool[middleOfPool];
}

export function isVowel(character: string): boolean {
  let vowels: string = 'aeiouAEIOU'
  if (vowels.includes(character)) {
    return true;
  } return false;
}

export function translate(hungarian: string): string {
  for (let i: number = 0; i < hungarian.length; i++) {
    let letter: string = hungarian[i];
    if (isVowel(letter)) {
      hungarian = hungarian.split(letter).join(`${letter}v${letter}`)
      i += 2;      
    }
  }
  return hungarian
}
