'use strict';

import { Instrument } from './instruments';

abstract class StringedInstrument extends Instrument {
  abstract numberOfStrings: number;

  abstract sound(): void;
  public play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-string instrument that goes ${this.sound()}`);
  };

}

class ElectricGuitar extends StringedInstrument{
  name: string;
  numberOfStrings: number;

  constructor(numberOfStrings: number = 6) {
    super();
    this.name = 'Electric Guitar';
    this.numberOfStrings = numberOfStrings;
  }

  public sound(): string {
    return 'Twang';
  }

}

class BassGuitar extends StringedInstrument{
  name: string;
  numberOfStrings: number;

  constructor(numberOfStrings: number = 4) {
    super();
    this.name = 'Bass Guitar';
    this.numberOfStrings = numberOfStrings;
  }

  public sound(): string {
    return 'Duum-duum-duum';
  }

}

class Violin extends StringedInstrument{
  name: string;
  numberOfStrings: number;

  constructor(numberOfStrings: number = 4) {
    super();
    this.name = 'Violin';
    this.numberOfStrings = 4;
  }

  public sound(): string {
    return 'Screech';
  }
  
}

export { StringedInstrument, ElectricGuitar, BassGuitar, Violin };