'use strict';

import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

print(dominoes);

console.log(typeof dominoes);

// console.log(dominoes[1]);

let sortedDominoes: Domino[] = [];
let j = 0;
sortedDominoes.push(dominoes[0]);

function sortThem(dominoes: any) {
  if (j == 5) {
    return;
  } else {
    for (let i = 1; i < dominoes.length; i++) {
      if (dominoes[i].values[0] == sortedDominoes[j].values[1]) {
        sortedDominoes.push(dominoes[i]);
        j++;
        sortThem(dominoes);
      }
    }
  }
}

sortThem(dominoes)


// function sortThem(dominoes: any) {
//   if (j=5){
//     return;
//   } else {
//     sortedDominoes.push(dominoes[0]);
//     for (let i = 1; i <= dominoes.length - 1; i++) {
//       if (dominoes[i].values[0] == dominoes[j].values[1]) {
//         sortedDominoes.push(dominoes[i]);
//         j++;
//         sortThem(dominoes)
//       }
//     }
//   }
// }

// function orderDominoes(dominoes: any) {
//   for (let i = 0; i < dominoes.length -1; i++) {
//     if (dominoes[i].values[1] !== dominoes[i+1].values[0]) {
//       // rendezd át
//     }
//   }
// }

// orderDominoes(dominoes);

print(sortedDominoes);


// console.log(dominoes[1].values[0])