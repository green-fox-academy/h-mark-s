'use strict';

class Plant {
  color: string;
  waterAmount: number;
  needsWater: boolean;

  constructor(color: string, waterAmount: number = 0, needsWater: boolean = true){
    this.color = color;
    this.waterAmount = waterAmount;
    this.needsWater = needsWater;
  }

  water(waterToAdd: number): void{
      this.waterAmount += waterToAdd;
    }

}  

export { Plant };