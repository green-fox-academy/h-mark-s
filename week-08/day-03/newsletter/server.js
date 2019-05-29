'use strict';

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());
app.use(express.static('/'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/newsletter.html'));
});

app.post('/signup', (req, res) => {
  res.send(`<h1>Thanks ${req.body.name}, we will send updates to ${req.body.email}!</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
