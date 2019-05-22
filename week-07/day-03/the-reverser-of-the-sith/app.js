'use strict';

const express = require('express');
const app = express();
const port = 5678;

app.use(express.json());

function yodafy (text) {
  let stringOfWords = text.split(' ');
  let yodaString = [];
  for (let i = 0; i < stringOfWords.length; i++) {
    if (i % 2 === 0) {
      yodaString.push(stringOfWords[i]);
    } else if (i % 2 === 1) {
      yodaString.splice(i - 1, 0, stringOfWords[i]);
    }
  } yodaString[0] = yodaString[0].charAt(0).toUpperCase() + yodaString[0].slice(1);
  yodaString[1] = yodaString[1].toLowerCase();
  return yodaString.join(' ');
}

app.post('/sith', (req, res) => {
  res.send({
    "sith_text": yodafy(req.body.text),
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
