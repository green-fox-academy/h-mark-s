'use strict';

import { Animal } from './animal';

class Reptile extends Animal {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number = 30, gender: string = 'male') {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public breed(): string {
    return 'laying eggs';
  }
}

class Mammal extends Animal {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number = 5, gender: string = 'female') {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public breed(): string{
    return 'pushing miniature versions out';
  }
}

class Bird extends Animal {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number = 1, gender: string = 'male') {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public breed(): string{
    return 'laying eggs';
  }
}

export { Reptile, Mammal, Bird }