'use strict';

import { Sum } from './sum';

declare function require(path: string): any;
var test = require('tape').test

test('return sum of numbers', function(t: any) {
  const sum: Sum = new Sum();

  const actual = sum.sum(1, 2, 3);
  const expected: number = 1 + 2 + 3;

  t.equal(actual, expected);
  t.end();

});
