'use strict';

import { Apple } from './apple';

declare function require(path: string): any;
var test = require('tape').test

test('returning string', function (t: any) {
  const apple: Apple = new Apple();

  const actual = apple.getApple();
  const expected: string = 'banana';

  t.equal(actual, expected);
  t.end();
});
