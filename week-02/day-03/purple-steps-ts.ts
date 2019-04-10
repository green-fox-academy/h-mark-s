'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

for (let i = 0; i < 19; i++) {
  ctx.beginPath();
  ctx.fillStyle = 'violet';
  ctx.fillRect(18.75 + i * 18.75, 18.75 + i * 18.75, 18.75, 18.75);
  ctx.strokeRect(18.75 + i * 18.75, 18.75 + i * 18.75, 18.75, 18.75);
}

export{}