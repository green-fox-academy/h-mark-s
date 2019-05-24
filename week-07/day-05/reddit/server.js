'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 7776;

app.use(express.json());

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('Connection to DB is A-OK!');
});

app.get('/posts', (req, res) => {
  conn.query(`SELECT * FROM post;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.status(200).json(rows);
  });
});

app.post('/posts', (req, res) => {
  conn.query(`INSERT INTO post(title, url) VALUES(?,?);`, [req.body.title, req.body.url], (err) => {
    if (err) {
      console.log(err.toString());
      res.status(500);
      return;
    }
  });
  conn.query(`SELECT * FROM post ORDER BY id DESC LIMIT 1;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500);
      return;
    }
    res.status(201).json(rows);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
