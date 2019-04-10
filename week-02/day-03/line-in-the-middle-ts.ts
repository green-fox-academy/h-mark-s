'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

// draw a red horizontal line to the canvas' middle.

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(0, 300);
ctx.lineTo(600, 300);
ctx.stroke();


// draw a green vertical line to the canvas' middle.

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(300, 0);
ctx.lineTo(300, 600);
ctx.stroke();