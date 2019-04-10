'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(100, 100);
ctx.lineTo(500, 100);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(500, 100);
ctx.lineTo(500, 500);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'yellow';
ctx.moveTo(500, 500);
ctx.lineTo(100, 500);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(100, 500);
ctx.lineTo(100, 100);
ctx.stroke();

export{}