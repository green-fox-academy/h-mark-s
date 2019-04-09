"use strict";

let listA = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];

// Create a new list ('List B') with the values of List A

let listB = listA.map(function(copy) {
  return (copy);
});

// Print out whether List A contains Durian or not

if (listA.indexOf('Durian') == -1) {
  console.log('this list does not contain Durian')
} else {
  console.log('this list contains Durian')
};

// Remove Durian from List B

listB.splice(3,1);

// Add Kiwifruit to List A after the 4th element

listA.splice(4, 0, 'Kiwifruit');

// Compare the size of List A and List B

if (listA.length < listB.length) {
  console.log('listB contains more elements than listA')
} else {
  console.log('listA contains more elements than listB')
};

// Get the index of Avocado from List A

console.log(listA.indexOf('Avocado'));

// Get the index of Durian from List B

console.log(listB.indexOf('Durian'));

// Add Passion Fruit and Pummelo to List B in a single statement

listB.push('Passion Fruit', 'Pummelo')

// Print out the 3rd element from List A

console.log(listA[2]);