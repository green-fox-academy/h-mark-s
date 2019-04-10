'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.

function lineDrawing(x: number, y: number): void {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 50, y);
  ctx.stroke();
}

// draw 3 lines with that function. Use loop for that.

for (let i = 100; i <= 300; i += 100) {
  lineDrawing(100, i);
}

export{}