'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');


function fractalTriangle(startX: number, startY: number, length: number, depth: number) {
  if (length < canvas.width / depth) {
    return;
  } else {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + length, startY);
    ctx.lineTo(startX + length * 0.5, startY+ length);
    ctx.lineTo(startX, startY);
    ctx.stroke();

    ctx.moveTo(startX + length * 0.25, startY + length * 0.5);
    ctx.lineTo(startX + length * 0.75, startY +length * 0.5);
    ctx.lineTo(startX + length * 0.5, startY);
    ctx.lineTo(startX + length * 0.25, startY +length * 0.5);
    ctx.stroke();

    fractalTriangle(startX, startY, length * 0.5, depth);
    fractalTriangle(startX + length * 0.5, startY, length * 0.5, depth);
    fractalTriangle(startX + length * 0.25, startY + length * 0.5, length * 0.5, depth);
  }
}

fractalTriangle(0, 0, 600, 48);

export{}
