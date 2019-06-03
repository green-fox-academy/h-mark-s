'use strict';

const promiseOne = Promise.resolve('SUCCESS');

const promiseTwo = new Promise((resolve, reject) => {
  reject('FAILURE');
});

promiseTwo
  .catch((error) => console.log(error));