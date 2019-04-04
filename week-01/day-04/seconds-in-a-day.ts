'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let passedSeconds: number = currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds;
let secondsInADay: number = 24 * 60 * 60;
let remainingSeconds: number = secondsInADay - passedSeconds;

console.log(remainingSeconds);