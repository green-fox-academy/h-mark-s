'use strict';

let lineCount: number = 4;
let pyramid: string;
let space: string = ' ';
let element: string = '*';



for (let i: number = 0; i < lineCount; i++) {
    pyramid = '';
    for (let j: number = 1; j < lineCount-i; j++){
        pyramid = pyramid + space;
    }
    for (let k: number = 1; k <= (2*i+1); k++) {
        pyramid = pyramid + element;
      }
    
    console.log(pyramid);
}

export {}

/* for (let i: number = 1; i <= lineCount; i++) {
    for (let j: number = 1; j <= lineCount; j++) {
        pyramid = pyramid + space;
    }
    for (let k: number = 1; k <= (2 * i + 1); k++) {
        pyramid = pyramid + element;
    }
    console.log(pyramid);
}

 for (let i: number = 4; i = 1; i--) {
    pyramidSpace = pyramidSpace + space;
    pyramidElement = pyramidElement + element;
    console.log(pyramidSpace + pyramidElement);
}

for (let j: number = 1; j <=lineCount; j++) {
    pyramid = pyramid + pyramidElement;
    console.log(pyramid);
}

/* for (let i: number = 1; i <=lineCount; i++) {
    triangle = triangle + triangleComponent;
    console.log(triangle);
} */