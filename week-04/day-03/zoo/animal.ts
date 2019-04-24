'use strict';

abstract class Animal{
  abstract name: string;
  abstract age: number;
  abstract gender: string;


  getName(): string{
    return this.name;
  };

  abstract breed(): void;
}

export { Animal };