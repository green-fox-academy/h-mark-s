'use strict';

const express = require('express');
const app = express();
const port = 1234;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let name = '';
  if (req.query.name) {
    name = req.query.name;
  } else {
    name = 'Guest';
  }
  res.render('home', {
    qs: name,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
