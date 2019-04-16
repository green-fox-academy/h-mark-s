'use strict';

export { }

declare function require(path: string): any;
let fs = require('fs');

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

function addMyName (path: string, name: string) {
  try {
    fs.appendFileSync(path, name);
  } catch (e) {
    console.log('Unable to write file: ' + e.path);
  }
}

addMyName('my-file.txt', '\nMark');