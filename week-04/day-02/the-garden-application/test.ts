'use strict';

import { Tree } from './the-tree';
import { Flower } from './the-flower';
import { Garden } from './the-garden';

let flower1 = new Flower('yellow', 0);
let flower2 = new Flower('blue', 0);

let tree1 = new Tree('purple', 0);
let tree2 = new Tree('orange', 0);

let garden1 = new Garden();

garden1.addFlower(flower1);
garden1.addFlower(flower2);
garden1.addTree(tree1);
garden1.addTree(tree2);

garden1.checkGarden();
garden1.waterGarden(40);
garden1.waterGarden(70);
