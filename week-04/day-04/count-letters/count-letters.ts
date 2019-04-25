"use strict";

function countLetters(stringToCheck: string): object {
  let objectOfLetters: {
    [key: string]: number;
  } = {};
  for (let i: number = 0; i < stringToCheck.length; i++) {
    let letterCount: number = 0;
    let letterToCheck: string = stringToCheck.charAt(i);
    for (let j: number = 0; j < stringToCheck.length; j++) {
      if (stringToCheck.charAt(j) === letterToCheck) {
        letterCount++;
      }
    }
    if (!objectOfLetters.hasOwnProperty(letterToCheck)) {
      objectOfLetters[letterToCheck] = letterCount;
    }
  }
  return objectOfLetters;
}

console.log(countLetters("mfdsafkldsammmmdfsaaaa"));

export { countLetters };
