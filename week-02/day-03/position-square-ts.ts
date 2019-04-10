'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.

function squareDrawing (x: number, y: number) {
  ctx.beginPath();
  ctx.strokeRect(x, y, 50, 50);
}

// Draw 3 squares with that function.
// Avoid code duplication.

squareDrawing(10, 10);
squareDrawing(72, 550);
squareDrawing(300, 300);
squareDrawing(420, 420);

export{}