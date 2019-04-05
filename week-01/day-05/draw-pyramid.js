'use strict';

const lineCount = 6;
const space = ' ';
const star = '*';

let spaceNumber = lineCount - 1;
let starNumber = 1;

for (let i = 0; i < lineCount; i++) {
  let pyramidLine = space.repeat(spaceNumber) + star.repeat(starNumber);
  console.log(pyramidLine);
  spaceNumber--;
  starNumber += 2;
}