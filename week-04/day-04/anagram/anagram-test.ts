'use strict';

import { anagram } from './anagram';

declare function require(path: string): any;
var test = require('tape').test;

test('comparing anagrams', function (t: any) {

  const actual: boolean = anagram('mark', 'karm');
  const expected: boolean = true;

  t.equal(actual, expected);
  t.end();

});
