'use strict';

import { Plant } from './plant';

class Flower extends Plant{
// typeOfPlant: string = Flower.name;

  checkIfNeedsWater(): boolean {
    if (this.waterAmount < 5) {
      this.needsWater = true;
      return this.needsWater;
    } else {
      this.needsWater = false;
      return this.needsWater;
    }
  }

  water(waterToAdd: number): void{
    if (this.waterAmount < 5) {
      this.waterAmount += waterToAdd * 0.75;
    }
  }

}

export { Flower };