'use strict';

const express = require('express');
const app = express();
const port = 4567;

app.use(express.json());

function sum (numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum+= numbers[i];
  } return sum;
}

function multiply (numbers) {
  let num = 1;
  for (let i = 1; i < numbers.length; i++) {
    num = num * numbers[i];
  } return num;
}

function double (numbers) {
  let doubledNums = [];
  for (let i = 0; i < numbers.length; i++) {
    doubledNums.push(numbers[i] * 2);
  } return doubledNums;
}

app.post('/arrays', (req, res) => {
  if (req.body.what === "sum" && req.body.numbers !== undefined) {
    res.send({
      "result": sum(req.body.numbers),
    });
  } else if (req.body.what === "multiply" && req.body.numbers !== undefined) {
    res.send({
      "result": multiply(req.body.numbers),
    });
  } else if (req.body.what === "double" && req.body.numbers !== undefined) {
    res.send({
      "result": double(req.body.numbers),
    });
  } else if (req.body.numbers === undefined || req.body.what === undefined) {
    res.send({
      "error": "Please provide what to do with the numbers!",
    })
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
