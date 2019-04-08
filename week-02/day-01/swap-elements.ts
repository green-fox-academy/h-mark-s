'use strict';

let abc: string[] = ['Arthur', 'Boe', 'Chloe'];
console.log(abc);

function moveElement() {
  let elementToMove = abc.shift();
  abc.push(elementToMove);
  console.log(abc);
}

moveElement();