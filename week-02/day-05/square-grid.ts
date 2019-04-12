"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx: any = canvas.getContext("2d");

const rectSize: number = canvas.width / 2;
// let rectWidth: number = 15;

function squareGrid(startX: number, startY: number, size: number, width: number) {
  if (size <= 18.75) {
    return;
  } else {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeRect(startX + size / 2, startY + size / 2, size, size);
    ctx.stroke();

    squareGrid(startX, startY, size / 2, width / 2);
    squareGrid(startX + size, startY, size / 2, width / 2);
    squareGrid(startX + size, startY + size, size / 2, width / 2);
    squareGrid(startX, startY + size, size / 2, width / 2);

  }
}

squareGrid(0, 0, rectSize, 15);

export{}