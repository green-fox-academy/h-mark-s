'use strict';

class Plant {
  color: string;
  waterAmount: number;

  constructor(color: string, waterAmount: number = 0){
    this.color = color;
    this.waterAmount = waterAmount;
  }

  water(waterToAdd: number): void{
      this.waterAmount += waterToAdd;
    }
}

export { Plant };