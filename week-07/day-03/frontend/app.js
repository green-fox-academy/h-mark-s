'use strict';

const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  if (req.query.input !== undefined) {
    res.send({
      "received": Number(req.query.input),
      "result": req.query.input * 2,
    });
  } else {
    res.send({
      "error": "Please provide an input!",
    });
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name !== undefined && req.query.title !== undefined) {
    res.send({
    "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`,
  });
  } else if (req.query.name === undefined && req.query.title !== undefined) {
    res.send({
      "error": "Please provide a name!",
    });
  } else if (req.query.name !== undefined && req.query.title === undefined) {
    res.send({
      "error": "Please provide a title!"
    });
  } else if (req.query.name === undefined && req.query.title === undefined) {
    res.send({
      "error": "Please provide a name and a title!"
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  res.send({
    "appended": req.params.appendable + "a",
  });
});

app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
