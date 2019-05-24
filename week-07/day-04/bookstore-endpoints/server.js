'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 9875;
const path = require('path');

//middleware
app.use(express.static('public'));

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
  res.sendFile(path.join(__dirname, '/public/index.html'));
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

const defaultQuery = `SELECT book_mast.book_name AS 'title', author.aut_name AS 'author', category.cate_descrip AS 'category', publisher.pub_name AS 'publisher', book_mast.book_price AS 'price'
  FROM book_mast
  JOIN author
    ON book_mast.aut_id = author.aut_id
  JOIN category
    ON book_mast.cate_id = category.cate_id
  JOIN publisher
    ON book_mast.pub_id = publisher.pub_id`;

// app.get('/full-list', (req, res) => {
//   if (req.query.title !== undefined) {
//     conn.query(defaultQuery + ' WHERE book_mast.book_name = "' + req.query.title + '"' + ` ORDER BY book_mast.book_name ASC;`,  (err, rows) => {
//       if (err) {
//         console.log(err.toString());
//         return;
//       }
//       res.send(rows)
//     });
//   } else {
//     console.log(req.query.title);
//     conn.query(defaultQuery + `\nORDER BY book_mast.book_name ASC;`, (err, rows) => {
//       if (err) {
//         console.log(err.toString());
//         return;
//       }
//       res.send(rows);
//     });
//   }
// });


app.get('/filter', (req, res) => {
  let titleQuery = req.body.book_name;
  let authorQuery = req.query.author;
  let categoryQuery = req.query.category;
  let publisherQuery = req.query.publisher;
  let priceQuery = req.query.publisher;
  if (titleQuery === undefined && authorQuery === undefined && categoryQuery === undefined && publisherQuery === undefined && priceQuery === undefined) {
    conn.query(defaultQuery, (err, rows) => {
      if (err) {
        console.log(err.toString());
        return;
      }
      res.send(rows);
    });
  } else if (titleQuery !== undefined && authorQuery === undefined && categoryQuery === undefined && publisherQuery === undefined && priceQuery === undefined) {
    conn.query(defaultQuery + `\nWHERE book_name = ?` + `\nORDER BY book_mast.book_name ASC;`, titleQuery, (err, rows) => {
      if (err) {
        console.log(err.toString());
        return;
      }
      res.send(rows);
    });
  } else if (titleQuery === undefined && authorQuery !== undefined && categoryQuery === undefined && publisherQuery === undefined && priceQuery === undefined) {
    conn.query(defaultQuery + `\nWHERE aut_name = ?`, req.body.aut_name, (err, rows) => {
      if (err) {
        console.log(err.toString());
        return;
      }
      res.redirect('/');
    });
  } else if (titleQuery === undefined && authorQuery === undefined && categoryQuery !== undefined && publisherQuery === undefined && priceQuery === undefined) {
    conn.query(defaultQuery + `\nWHERE cate_descrip = ?`, req.body.aut_name, (err, rows) => {
      if (err) {
        console.log(err.toString());
        return;
      }
      res.redirect('/');
    });
  }
});

app.listen(port, () => {
  console.log(`Listening at port ${port}!`)
});
