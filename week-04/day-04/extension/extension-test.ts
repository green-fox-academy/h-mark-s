'use strict';

import { add, maxOfThree, median, isVowel, translate } from './extension';

declare function require(path: string): any;
var test = require('tape').test;

test('add: 2 and 3 is 5', function (t: any): any {
  t.equal(add(2, 321), 323);
  t.end();
});

test('add: 1 and 4 is 5', function (t: any): any {
  t.equal(add(1, 14), 15);
  t.end();
});

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(65, 43, 7), 65);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(7, 43, 65), 65);
  t.end();
});

test('median: four', function (t: any): any {
  t.equal(median([1, 2, 5, 4, 3, 1, 4, 3, 3, 4, 3, 5, 1]), 3);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 4, 2, 4, 2, 3, 5, 3, 1, 1]), 2.5);
  t.end();
});

test('is vowel: a', function (t: any): any {
  t.ok(isVowel('a'));
  t.end();
});

test('is vowel: u', function (t: any): any {
  t.ok(isVowel('u'));
  t.end();
});

test('is vowel: k', function(t: any): any {
  t.notOk(isVowel('k'));
  t.end();
});

test('translate: bemutatkozik', function (t: any): any {
  t.equal(translate('bemutatkozik'), 'bevemuvutavatkovozivik');
  t.end();
});

test('translate: lagopus', function (t: any): any {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});
