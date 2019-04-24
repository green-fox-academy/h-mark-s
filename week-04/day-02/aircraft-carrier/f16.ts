'use strict';

import { Aircraft } from './aircraft'; 

class F16 extends Aircraft {
  type: string = 'F16';
  maxAmmo: number = 8;
  baseDamage: number = 30;
}