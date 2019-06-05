'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv').config();
const port = 5500;

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

conn.connect(err => {
  if (err) {
    console.log(err.toString());
    res.status(404).send('Error connecting to database!');
    return;
  }
  console.log('Connection to DB is A-OK!');
});

app.use(express.json());
app.use(express.static('public'));

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, game.html));
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, questions.html));
});

app.get('/api/game', (req, res) => {
  conn.query(`SELECT * FROM questions;`, (err, rows) => {
    if (err) {
      res.status(400).send('Database error!');
      return;
    }
    const randomId = Math.floor(Math.random() * Math.floor(rows.length)) + 1;
    conn.query(
      `SELECT questions.id AS id, questions.question AS question, answers.*
      FROM questions
      LEFT JOIN answers
      ON questions.id = answers.question_id
      WHERE questions.id=?;`,
      [randomId],
      (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.status(400).send('Database error!');
          return;
        }
        const answers = [];
        for (let i = 0; i < rows.length; i++) {
          answers.push({
            'question_id': rows[0].question_id,
            'id': rows[i].id,
            'answer': rows[i].answer,
            'is_correct': rows[i].is_correct
          });
        }
        res.json({
          'id': rows[0].question_id,
          'question': rows[0].question,
          'answers': answers
        });
      }
    );
  });
});

app.get('/api/questions', (req, res) => {
  conn.query('SELECT * FROM questions;', (err, rows) => {
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
