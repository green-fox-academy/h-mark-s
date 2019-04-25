'use strict';

import { Sharpie } from './sharpie';

declare function require(path: string): any;
var test = require('tape').test;

test('test use function', function (t: any): any {
  const sharpie1: Sharpie = new Sharpie('black', 3);
  sharpie1.use();

  t.equal(sharpie1.inkAmount, 99);
  t.end()
});
