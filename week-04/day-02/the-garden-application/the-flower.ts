'use strict';

import { Plant } from './plant';

class Flower extends Plant{
// typeOfPlant: string = Flower.name;

  checkIfNeedsWater(): boolean {
    if (this.waterAmount < 5) {
      return true;
    } else {
      return false;
    }
  }

  // water(waterToAdd: number): void{
  //   if (this.waterAmount < 5) {
  //     this.waterAmount += waterToAdd * 0.75;
  //   }
  // }

}

export { Flower };