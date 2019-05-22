'use strict';

const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// express.json -> body parser beepitett verzioja,
// a json-t at tudja alakitani js objektumma, amit mar tudok olvasni

app.use(express.json());
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

app.post('/dountil/:action', (req, res) => {
  if (req.params.action === "sum") {
    let sum = 0;
    for (let i = 0; i <= req.body.until; i++) {
      sum += i;
    };
    res.send({
      "result": sum,
    });
  } else if (req.params.action === "factor") {
    let num = 1;
    for (let i = 1; i <= req.body.until; i++) {
      num = num * i;
    }
  }
});


app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
