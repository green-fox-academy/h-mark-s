'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

function circleFractal (startX: number, startY: number, size: number): void {
  if (size < 10) {
    return;
  } else {
    ctx.beginPath();
    ctx.arc(startX + size, startY + size, size, 0, Math.PI * 2);
    ctx.stroke();
    
    circleFractal(startX + size / 2 + size / 2 * Math.cos(Math.PI / 6), startY + size / 2 + size / 2 * Math.sin(Math.PI / 6), size / 2);
    circleFractal(startX + size / 2 - size / 2 * Math.cos(Math.PI / 6), startY + size / 2 + size / 2 * Math.sin(Math.PI / 6), size / 2);
    circleFractal(startX + size / 2, startY + size / 2 - size * Math.sin(Math.PI / 6), size / 2);

  }
}

circleFractal(0, 0, canvas.width / 2);

export{}
