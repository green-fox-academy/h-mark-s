'use strict';

import { Flyable } from './flyable'
import { Vehicle } from './vehicle';

class Helicopter extends Vehicle implements Flyable {
  name: string;
  type: string;
  price: number;

  constructor(name: string = 'helicopter', type = 'flying vehicle', price = 3000000) {
    super();
    this.name = name;
    this.type = type;
    this. price = price;
  }

  land(): void{
    console.log(`This ${this.name} is landing.`);
  };

  fly(): void{
    console.log(`This ${this.name} is flying.`)
  }
  
  takeoff(): void{
    console.log(`This ${this.name} took off.`)
  };

}

let helicopter1 = new Helicopter();

helicopter1.fly();
