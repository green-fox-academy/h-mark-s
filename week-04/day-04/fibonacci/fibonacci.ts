"use strict";

function fibonacci(index: number): number {
  let fibonacciList: number[] = [0, 1];
  for (let i: number = 2; i < index + 1; i++) {
    fibonacciList[i] = fibonacciList[i - 1] + fibonacciList[i - 2];
  }
  return fibonacciList[index];
}

export { fibonacci };
