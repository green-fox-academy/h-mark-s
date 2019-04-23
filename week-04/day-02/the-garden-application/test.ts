'use strict';

import { Plant } from './plant';
import { Tree } from './the-tree';
import { Flower } from './the-flower';
import { Garden } from './the-garden';

let tree1 = new Tree('purple', 0);
let tree2 = new Tree('white', 0);
let tree3 = new Tree('blue', 100);

let flower1 = new Flower('black', 1000);
let flower2 = new Flower('yellow', 7);

let garden1 = new Garden();

garden1.addTree(tree1);
garden1.addTree(tree2);
garden1.addTree(tree3);
garden1.addFlower(flower1);
garden1.addFlower(flower2);

console.log(garden1);



garden1.waterGarden(50);

console.log(garden1);