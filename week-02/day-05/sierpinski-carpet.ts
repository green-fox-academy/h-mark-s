'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

const rectLength: number = canvas.width / 3;

function sierpinskiCarpet(startX: number, startY: number, length: number, depth: number): void {
  if (length < canvas.width / depth) {
    return;
  } else {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(startX + length, startY + length, length, length);
  
    sierpinskiCarpet(startX, startY, length / 3, depth)
    sierpinskiCarpet(startX + length, startY, length / 3, depth)
    sierpinskiCarpet(startX + length * 2, startY, length / 3, depth)
    sierpinskiCarpet(startX, startY + length, length / 3, depth)
    sierpinskiCarpet(startX, startY + length * 2, length / 3, depth)
    sierpinskiCarpet(startX + length * 2, startY + length, length / 3, depth)
    sierpinskiCarpet(startX + length, startY + length * 2, length / 3, depth)
    sierpinskiCarpet(startX + length * 2, startY + length * 2, length / 3, depth)
    
  }
}

sierpinskiCarpet(0, 0, rectLength, 1000);

export{}