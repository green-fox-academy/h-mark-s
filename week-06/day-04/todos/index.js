'use strict';

const express = require('express');
const app = express();
const port = 9999;

app.set('view engine', 'ejs');

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.get('/', (req, res) => {
  res.render('home', {
    list: todos,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
