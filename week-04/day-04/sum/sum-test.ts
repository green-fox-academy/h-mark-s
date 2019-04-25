'use strict';

import { Numbers } from './sum';

declare function require(path: string): any;
var test = require('tape').test

test('return sum of numbers', function(t: any) {
  const numbers1: Numbers = new Numbers();

  const actual = numbers1.sum([1, 2, 3]);
  const expected: number = 1 + 2 + 3;

  t.equal(actual, expected);
  t.end();

});

test('sum of an empty array', function(t:any) {
  const numbers1: Numbers = new Numbers();

  const actual = numbers1.sum([]);
  const expected: number = 0;

  t.equal(actual, expected);
  t.end();

});

test('sum of one element', function (t:any) {
  const numbers1: Numbers = new Numbers();

  const actual = numbers1.sum([1]);
  const expected: number = 1;

  t.equal(actual, expected);
  t.end();

})
