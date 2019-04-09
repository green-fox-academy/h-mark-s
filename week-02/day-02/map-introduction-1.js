'use strict';

// Create an empty map where the keys are integers and the values are characters

let myMap = {};

// Print out whether the map is empty or not

console.log(Object.keys(myMap));

// Add the following key-value pairs to the map

myMap[97] = 'a';
myMap[98] = 'b';
myMap[99] = 'c';
myMap[65] = 'A';
myMap[66] = 'B';
myMap[67] = 'C';

// Print all the keys

console.log(Object.keys(myMap));

// Print all the values

console.log(Object.values(myMap));

// Add value D with the key 68 

myMap['68'] = 'D';

// Print how many key-value pairs are in the map

console.log(Object.keys(myMap).length);

// Print the value that is associated with key 99

console.log(myMap[99]);

// Remove the key-value pair where with key 97

delete myMap[97];

// Print whether there is an associated value with key 100 or not

console.log(myMap[100]);

// Remove all the key-value pairs

delete myMap[65];
delete myMap[66];
delete myMap[67];
delete myMap[68];
delete myMap[98];
delete myMap[99];

console.log(myMap);
