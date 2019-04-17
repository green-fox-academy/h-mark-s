'use strict';

class Counter {
  integer: number;

  constructor(integer: number = 0){
    this.integer = integer;
  }

  add(number: number = 1){
    this.integer += number;
  }

  get(){
    console.log(`the current value is ${this.integer}`)
  }

  reset(){
    this.integer = 0;
  }
}

let firstNumber: Counter = new Counter();
console.log(firstNumber);
firstNumber.add();
console.log(firstNumber);
firstNumber.add(4);
console.log(firstNumber);
firstNumber.get();
firstNumber.reset();
firstNumber.get();