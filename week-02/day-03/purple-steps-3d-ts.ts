'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

function purpleSteps3d(stepNumber: number, size: number) {
  let position: number = 15;
  for (let i = 1; i <= stepNumber; i++) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(position, position, size * i, size * i);
    ctx.strokeRect(position, position, size * i, size * i)
    position += size * i;
  }
}

purpleSteps3d(6, 15)

export{}
