'use strict';

import { fibonacci } from './fibonacci';

declare function require(path: string): any;
var test = require('tape').test;

test('fibonacci function', function (t: any) {
  
  const actual: number = fibonacci(10);
  const expected: number = 55;

  t.equal(actual, expected);
  t.end();
});
