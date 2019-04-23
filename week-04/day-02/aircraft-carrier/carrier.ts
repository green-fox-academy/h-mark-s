'use strict';

import { Aircraft } from './aircraft';

class Carrier {
  initialAmmo: number;
  healthPoint: number;
  aircrafts: Aircraft[];
  storeOfAmmo: number;

  constructor(initialAmmo: number, healthPoint: number) {
    this.initialAmmo = initialAmmo;
    this.healthPoint = healthPoint;
  }

  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  fill(storeOfAmmo): void {
    for (let i = 0; i < this.aircrafts.length; i++) {
      this.aircrafts[i].refill(storeOfAmmo);
    } return storeOfAmmo;
  }

  fight() {

  }

  getStatus() {

  }



}