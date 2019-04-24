'use strict';

abstract class Aircraft {
  abstract type: string;
  abstract maxAmmo: number;
  abstract baseDamage: number;
  protected currentAmmo: number = 0;
  protected damage: number = 0;

  fight(): number {
    this.damage = this.maxAmmo * this.baseDamage;
    this.currentAmmo = 0;
    return this.damage;
  }

  refill(ammoToRefill: number): number {
    let missingAmmo: number = this.maxAmmo - this.currentAmmo;
    if (ammoToRefill - missingAmmo > 0) {
      this.currentAmmo = this.maxAmmo;
      ammoToRefill - missingAmmo;
    } else {
      this.currentAmmo += ammoToRefill;
      ammoToRefill = 0;
    }
    return ammoToRefill;
  }

  getType(): string {
    return this.type;
  }

  getStatus(): string {
    return `Type: ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All damage: ${this.damage}`;
  }

  isPriority(): boolean {
    let priority: boolean = false;
    if (this.type === 'F35') {
      priority = true;
    } else if (this.type === 'F16') {
      priority = false;
    } return priority;
  }

}

export { Aircraft };
