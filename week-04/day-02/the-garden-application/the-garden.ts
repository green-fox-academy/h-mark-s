'use strict';

import { Plant } from './plant';
import { Tree } from './the-tree';
import { Flower } from './the-flower';

class Garden {
  trees: Tree[];
  flowers: Flower[];
  plantsToWater: any[];
  
  constructor() {
    this.trees = [];
    this.flowers = [];
    this.plantsToWater = [];
  }

  addTree(tree: Tree) {
    this.trees.push(tree);
  }

  addFlower(flower: Flower) {
    this.flowers.push(flower);
  }

// feladatok: 1. kell-e viz, 2. elosztas

  // waterTrees(waterToAdd: number): void {
  //   for (let i = 0; i < this.trees.length; i++) {
  //     this.trees[i].water(waterToAdd/this.trees.length);
  //   }
  // }

  // waterFlowers(waterToAdd: number): void {
  //   for (let i = 0; i < this.flowers.length; i++) {
  //     this.flowers[i].water(waterToAdd/this.flowers.length);
  //   }
  // }

  checkGarden(): void {
    for (let i = 0; i < this.trees.length; i++) {
      this.trees[i].checkIfNeedsWater();
      console.log(`The ${this.trees[i].color} Tree ${this.trees[i].needsWater ? 'needs' : 'doesnt need'} water.`);  
    } for (let j = 0; j < this.flowers.length; j++) {
      this.flowers[j].checkIfNeedsWater();
      console.log(`The ${this.flowers[j].color} Flower ${this.flowers[j].needsWater ? 'needs' : 'doesnt need'} water.`); 
    }
  }

  waterGarden(waterToAdd: number): void {
    console.log(`Watering with ${waterToAdd}`);
    this.plantsToWater = [];
    for (let i = 0; i < this.flowers.length; i++) {
      if (this.flowers[i].checkIfNeedsWater()) {
        this.plantsToWater.push(this.flowers[i])
      }
    } for (let j = 0; j < this.trees.length; j++) {
        if (this.trees[j].checkIfNeedsWater()) {
          this.plantsToWater.push(this.trees[j])
        } 
      } for (let k = 0; k < this.plantsToWater.length; k++) {
        this.plantsToWater[k].water(waterToAdd/this.plantsToWater.length);
        this.plantsToWater[k].checkIfNeedsWater();
        // if (this.plantsToWater[k] instanceof Flower) {
        //   console.log(`The ${this.plantsToWater[k].color} Flower ${this.plantsToWater[k].needsWater ? 'needs' : 'doesnt need'} water.`);
        // } else if (this.plantsToWater[k] instanceof Tree) {
        //   console.log (`The ${this.plantsToWater[k].color} Tree ${this.plantsToWater[k].needsWater ? 'needs' : 'doesnt need'} water.`)
        // }
    } this.checkGarden();
  }

  // watering(waterToAdd: number): number{
  //   for (let i = 0; i < this.plants.length; i++) {
  //     if (this.plants[i].checkIfNeedsWater() == true) {
  //       this.waterAmount += waterToAdd;
  //       return this.waterAmount;
  //     }
  //   }
  // }



}

export { Garden };