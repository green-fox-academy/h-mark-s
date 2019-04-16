'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function lineCount (filename) {
  try {
    console.log(fs.readFileSync(filename, 'UTF-8').split('\n').length - 1);
  } catch (e) {
      console.log(0);
  }
}


lineCount("my-file.txt");
