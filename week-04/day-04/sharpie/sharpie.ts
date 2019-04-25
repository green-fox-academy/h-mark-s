'use strict';

class Sharpie {
  color: string;
  width: number; //floating point???
  inkAmount: number; //floating point??

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
