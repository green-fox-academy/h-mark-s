'use strict';

export { }

declare function require(path: string): any;
let fs = require('fs');

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copyContent (originalPath: string, copyPath: string) {
  let contentToCopy: string = fs.readFileSync(originalPath, 'UTF-8');
  fs.writeFileSync(copyPath, contentToCopy);
}

copyContent('my-file.txt', 'copy.txt');
