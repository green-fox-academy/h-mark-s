"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx: any = canvas.getContext("2d");

// Fill the canvas with a checkerboard pattern.

//8x8

let verticalPosition: number = 0;
let squareSize: number = 75;600 / 8

for (let i = 0; i < 8; i++) {
  let horizontalPosition: number = 75;
  if (i % 2 == 0) {
    horizontalPosition = 0;
  }
  for (let j = 0; j < 4; j++) {
    ctx.beginPath();
    ctx.fillRect(horizontalPosition, verticalPosition, squareSize, squareSize);
    horizontalPosition = horizontalPosition + squareSize * 2;
  }
  verticalPosition += squareSize;
}

export{}
