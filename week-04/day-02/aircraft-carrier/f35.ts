'use strict';

import { Aircraft } from './aircraft';

class F35 extends Aircraft {
  type: string = 'F35';
  maxAmmo: number = 12;
  baseDamage: number = 50;
}