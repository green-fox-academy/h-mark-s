'use strict';

abstract class Instrument {
  abstract name: string;
  abstract play(): void;
}

export { Instrument };