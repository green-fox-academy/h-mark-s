'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 7776;

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

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
