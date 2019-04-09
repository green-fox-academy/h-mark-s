'use strict';

// Create a list with the following items

let expenses = [500, 1000, 1250, 175, 800, 120];

// How much did we spend?

function addExpenses (list) {
  let sum = 0;
  for (let i =0; i < list.length; i++) {
    sum = sum + list[i];
  }
  console.log(sum);
}

addExpenses(expenses);

// Which was our greatest expense?

function greatestExpense (list) {
  let expense = list.sort((a, b) => b - a);
  console.log(expense[0]);
}

greatestExpense(expenses);

// Which was our cheapest spending?

function cheapestExpense (list) {
  let expense = list.sort((a, b) => a - b);
  console.log(expense[0]);
}

cheapestExpense(expenses);

// What was the average amount of our spendings?

function averageExpense (list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum = sum + list[i];
  } let average = sum / list.length;
  console.log(average);
}

averageExpense(expenses);
