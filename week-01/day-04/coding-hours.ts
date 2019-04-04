'use strict';

let dailyHours: number=6;
let weeks: number=17;
let workdays: number=5;
let codingHours: number=dailyHours * weeks * workdays;

console.log('An average Green Fox attendee codes ' + codingHours + ' hours in a semester.');

let weeklyHours: number=52;
let semesterHours: number=weeklyHours * weeks;
let percentage: number=codingHours / semesterHours * 100;

console.log('An average Green Fox student codes in ' + percentage + ' percent of his or her working hours.');