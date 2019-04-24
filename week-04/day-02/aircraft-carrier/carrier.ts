'use strict';

import { Aircraft } from './aircraft';

class Carrier {
  aircrafts: Aircraft[] = [];
  storeOfAmmo: number;
  healthPoint: number;

  constructor(storeOfAmmo: number, healthPoint: number) {
    this.storeOfAmmo = storeOfAmmo;
    this.healthPoint = healthPoint;
  }

  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  fill(): number {
    for (let i: number = 0; i < this.aircrafts.length; i++) {
      this.aircrafts[i].refill(this.storeOfAmmo/this.aircrafts.length);
    } return this.storeOfAmmo;

    // If there is not enough ammo then it should start to fill the aircraftis with priority first
    // If there is no ammo when this method is called, it should throw an exception

  }

  fight() {

  }

  getStatus() {

  }



}