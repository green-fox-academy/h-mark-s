'use strict';

import { Flyable } from './flyable';
import { Animal } from '../zoo/animal';

class Bird extends Animal implements Flyable {
  name: string;
  age: number;
  gender: string;

  constructor(name: string = 'bird', age: number = 1, gender: string = 'male') {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
  }


  land(): void{
    console.log(`This ${this.name} has landed.`);    
  };

  fly(): void{
    console.log(`This ${this.name} is flying.`);
  };
  takeoff(): void{
    console.log(`This ${this.name} took off.`);
  };

  breed(): string{
    return 'laying eggs'
  }

}

let bird1 = new Bird();

bird1.fly();