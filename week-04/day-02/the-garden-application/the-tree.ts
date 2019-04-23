'use strict';

import { Plant } from './plant';

class Tree extends Plant {


  checkIfNeedsWater(): boolean {
    if (this.waterAmount < 5) {
      return true;
    } else {
      return false;
    }
  }


  // water(waterToAdd: number): void{
  //   if (this.waterAmount < 10) {
  //     this.waterAmount += waterToAdd * 0.4;
  //   }
  // }

}

export { Tree };