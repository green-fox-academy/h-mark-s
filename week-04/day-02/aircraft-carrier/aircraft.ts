'use strict';

class Aircraft {
  type: string;
  maxAmmo: number;
  currentAmmo: number;
  baseDamage: number;
  damage: number;

  constructor(type: string, maxAmmo: number, baseDamage: number, damage: number = 0) {
    this.type = type;
    this.maxAmmo = maxAmmo;
    this.currentAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.damage = damage;
  }

  fight(): number {
    this.damage = this.maxAmmo * this.baseDamage;
    this.currentAmmo = 0;
    return this.damage;
  }

  refill(ammoToRefill: number): number {
    if (ammoToRefill > this.maxAmmo - this.currentAmmo){
      this.currentAmmo = this.maxAmmo;
      return ammoToRefill = ammoToRefill - (this.maxAmmo - this.currentAmmo); 
    } else {
      this.currentAmmo += ammoToRefill;
      return ammoToRefill = 0;
    }
  }

  getType(): void {
    console.log(this.type);
  }

  getStatus(): void {
    console.log(`Type: ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All damage: ${this.damage}`);
  }

  isPriority(): boolean {
    if (this.type == 'F35') {
      return true;
    } else if (this.type == 'F16') {
      return false;
    }
  }

}

export { Aircraft };
