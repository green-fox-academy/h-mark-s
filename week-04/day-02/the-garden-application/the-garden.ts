'use strict';

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
    } this.checkGarden();
  }

}

export { Garden };