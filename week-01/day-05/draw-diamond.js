'use strict';

const lineCountDiamond = 4;
const lineCountDiamond2 = 3;
const diamondSpace = ' ';
const diamondElement = '*';

let diamondSpaceNum = lineCountDiamond - 1;
let diamondElementNum = 1;

for (let i = 0; i < lineCountDiamond; i++) {
  let diamondLine = diamondSpace.repeat(diamondSpaceNum) + diamondElement.repeat(diamondElementNum);
  console.log(diamondLine);
  diamondSpaceNum--;
  diamondElementNum += 2;
}

let diamondSpaceNum2 = 1;
let diamondElementNum2 = 5;

for (let i = 0; i < lineCountDiamond2; i++) {
  let diamondLine = diamondSpace.repeat(diamondSpaceNum2) + diamondElement.repeat(diamondElementNum2);
  console.log(diamondLine)
  diamondSpaceNum2++;
  diamondElementNum2 -= 2;
}