'use strict';

class Animal{
  name: string;
  hunger: number;
  thirst: number;

  constructor(name: string, hunger: number = 50, thirst: number = 50) {
    this.name = name;
    this.hunger = hunger;
    this.thirst = thirst;
  }

  eat(): void {
    this.hunger--;
  }

  drink(): void {
    this.thirst--;
  }

  play(): void {
    this.hunger++;
    this.thirst++;
  }

}

const firstAnimal: Animal = new Animal('lion');
console.log(firstAnimal);
firstAnimal.eat();
console.log(firstAnimal);
firstAnimal.drink();
console.log(firstAnimal);
firstAnimal.play();
console.log(firstAnimal);
