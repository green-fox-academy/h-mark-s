'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 9875;

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
  console.log('Connection to DB is OK!');
});

app.get('/list', (req, res) => {
  conn.query(`SELECT book_name FROM book_mast;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`Listening at port ${port}!`)
});
