'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.

function drawASquare (size: number) {
  ctx.beginPath();
  ctx.strokeRect(300 - size / 2, 300 - size / 2, size, size);
}

// Draw 3 squares with that function.
// Avoid code duplication.

drawASquare(10);
drawASquare(39);
drawASquare(420);

export{}