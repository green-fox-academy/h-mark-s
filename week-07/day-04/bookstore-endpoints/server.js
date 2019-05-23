'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 9875;
const path = require('path');
app.use(express.static('public'));
  // '/', 
  // express.static('/'));

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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
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

app.get('/full-list', (req, res) => {
  conn.query(
    `SELECT book_mast.book_name AS 'title of book', author.aut_name AS 'name of author', category.cate_descrip AS 'category', publisher.pub_name AS 'name of publisher', book_mast.book_price AS 'price'
    FROM book_mast
    JOIN author
      ON book_mast.aut_id = author.aut_id
    JOIN category
      ON book_mast.cate_id = category.cate_id
    JOIN publisher
      ON book_mast.pub_id = publisher.pub_id
    ORDER BY book_mast.book_name ASC;`, (err, rows) => {
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
