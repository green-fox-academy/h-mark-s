'use strict';

interface Comparable {
  compareTo(other: Comparable): number;
  values: number[];
}

class Domino implements Comparable {
  values: number[];

  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  compareTo(other: Comparable): number {
    let x: number = 0;
    if (this.values[0] < other.values[0]) {
      x = -1;
    } else if (this.values[0] > other.values[0]) {
      x = 1;
    } else if (this.values[0] = other.values[0]) {
      x = 0;  
    }
    return x;
  }
  
}

let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

dominoes.sort(function (a: Domino , b: Domino): number {
  return a.compareTo(b);
});

console.log(dominoes);
