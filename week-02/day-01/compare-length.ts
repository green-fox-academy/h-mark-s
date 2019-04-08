'use strict';

let firstList: number[] = [1, 2, 3];
let secondList: number[] = [4, 5, 6, 7, 8];

function logIfLonger(list1, list2): string {
  if (list1.length < list2.length) {
    return 'The second list has more elements than firstList.';

  } else {
    return ('The first list has more elements than secondList');
  }
}

logIfLonger(firstList, secondList);