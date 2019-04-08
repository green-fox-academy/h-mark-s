'use strict';

let numList: number[] = [1, 2, 3, 8, 5, 6];

numList = numList.map(function changeElements(num) {
  if (num === 8) {
    num = 4;
  } return num;
})

console.log(numList);