'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

// Draw four different size and color rectangles.
// Avoid code duplication.

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 200);

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.fillRect(550, 50, 40, 90);

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.fillRect(300, 450, 92, 123);

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(200, 380, 280, 50);

export{}