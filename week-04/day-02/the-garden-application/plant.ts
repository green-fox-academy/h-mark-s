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


  // checkIfPlantNeedsWater(plant: Plant): void {
  //   if (plant instanceof Flower) {
  //     if (plant.checkIfNeedsWater) {
  //       console.log('needs');
  //     } else {
  //       console.log('doesnt need');
  //     }
  //   } else if (plant instanceof Tree) {
  //       if (plant.checkIfNeedsWater) {
  //         console.log('needs');
  //       } else {
  //         console.log('doesnt need');
  //       }
  //   }
  // }

}  

export { Plant };