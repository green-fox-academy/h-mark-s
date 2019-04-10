'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx:any = canvas.getContext('2d');

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function lineDrawing(x: number, y: number): void {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(300, 300);
  ctx.stroke();
}

for (let i = 0; i <= 600; i += 300) {
  lineDrawing(i, 0);
}

export{}