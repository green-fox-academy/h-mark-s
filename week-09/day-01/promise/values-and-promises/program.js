'use strict';

function attachTitle(string) {
  return 'DR. ' + string;
}

const promise = new Promise((resolve) => {
  resolve('MANHATTAN');
});

promise
  .then(attachTitle)
  .then(console.log)