'use strict';

let numList: number[] = [1, 2, 3, 4, 5];

function incrementThirdElement(num) {
  numList[2] = numList[2] + num;
  console.log(numList[2])
}

incrementThirdElement(10);