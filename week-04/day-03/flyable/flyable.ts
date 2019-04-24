'use strict';

interface Flyable {
  land(): void;
  fly(): void;
  takeoff(): void;
}

export { Flyable };