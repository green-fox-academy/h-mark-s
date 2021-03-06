'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.

function rainbowBox (size: number, color: string): void {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.fillRect(300 - size / 2, 300 - size / 2, size, size);
}

// Create a loop that fills the canvas with rainbow colored squares.

let rainbowColor: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

for (let i = 0; i <=6; i++) {
  rainbowBox(600 - i * 600/7, rainbowColor[i])
}

export{}