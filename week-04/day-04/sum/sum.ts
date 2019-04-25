'use strict';

class Numbers {

  sum(numbers: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
    } return sum;
  }

}

export { Numbers };
