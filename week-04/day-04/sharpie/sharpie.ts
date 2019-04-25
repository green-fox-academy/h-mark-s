'use strict';

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, width: number, inkAmount: number = 100) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }

  use(){
    this.inkAmount--;
  }
}

let firstSharpie: Sharpie = new Sharpie('black', 5.5);
console.log(firstSharpie);
firstSharpie.use();

console.log(firstSharpie.inkAmount);

export { Sharpie };
