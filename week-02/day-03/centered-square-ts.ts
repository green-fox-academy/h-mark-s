'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

// Draw a green 10x10 square to the center of the canvas.

ctx.fillStyle = 'green';
ctx.fillRect(295, 295, 10, 10);

export{}