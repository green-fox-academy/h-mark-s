'use strict';

import { countLetters } from './count-letters';

declare function require(path: string): any;
var test = require('tape').test;


test('counting letters in string', function (t: any) {

  const actual = countLetters('markrk');
  const expected: object = {
    m: 1,
    a: 1,
    r: 2,
    k: 2
  };

  t.deepEqual(actual, expected);
  t.end();
});
