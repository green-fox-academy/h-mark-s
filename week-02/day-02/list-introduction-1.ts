'use strict';

// Create an empty list which will contain names (strings)
let list: string[] = [];

// Print out the number of elements in the list
console.log(list.length);

// Add William to the list
list.push('William');

// Print out whether the list is empty or not
if (list.length === 0) {
  console.log('This list is empty')
} else {
  console.log('This list is not empty')
}

// Add John to the list, add Amanda to the list
list.push('John', 'Amanda');

// Print out the number of elements in the list
console.log(list.length);

// Print out the 3rd element
console.log(list[2]);

// Iterate through the list and print out each name

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

/* Iterate through the list and print
1. William
2. John
3. Amanda */

for (let i = 0; i < list.length; i++) {
  console.log((i+1) + '. ' + list[i]);
}

// Remove the 2nd element

list.splice(1,1);
console.log(list);

// Iterate through the list in a reversed order and print out each name 

for (let i = list.length - 1; i >= 0; i--) {
  console.log(list[i]);
}

// Remove all elements

list.splice(0,2);
console.log(list)
