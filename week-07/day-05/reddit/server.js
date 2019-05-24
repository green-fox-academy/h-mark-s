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
  conn.query(`SELECT * FROM posts;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.status(200).json(rows);
  });
});

app.post('/posts', (req, res) => {
  conn.query(`INSERT INTO posts(title, url, username) VALUES(?,?,?);`, [req.body.title, req.body.url, req.body.username], (err) => {
    if (err) {
      console.log(err.toString());
      res.status(500);
      return;
    }
    conn.query(`SELECT * FROM posts ORDER BY pId DESC LIMIT 1;`, (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500);
        return;
      }
      res.status(201).json(rows);
    });
  });
});

app.post('/users', (req, res) => {
  conn.query(`INSERT INTO users(username) VALUES(?);`, req.body.username, (err) => {
    if (err) {
      console.log(err.toString());
      res.status(500);
      return;
    }
    conn.query(`SELECT * FROM users WHERE username="` + req.body.username +`";`, (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500);
        return;
      }
      res.status(201).json(rows);
    });
  });
});

app.put('/posts/:pid/upvote', (req, res) => {
  conn.query(`UPDATE posts SET score = score + 1 WHERE pId=` + req.params.pid, (err) => {
    if (err) {
      console.log(err.toString());
      res.status(500);
      return;
    }
    conn.query(`SELECT * FROM posts WHERE pId=` + req.params.pid, (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500);
        return;
      }
      res.status(202).json(rows);
    });
  });
});

app.put('/posts/:username/:pid/downvote', (req, res) => {
  conn.query(`SELECT * FROM votes WHERE username="` + req.params.username+ `" AND pId ="` + req.params.pid + `";`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500);
      return;
    }
    if (rows.length === 0) {
      conn.query('INSERT INTO votes(username, pId, vote) VALUES(?,?,?);', [req.params.username, req.params.pid, -1], (err) => {
        if (err) {
          console.log(err.toString());
          res.status(500);
          return;
        }
        conn.query('UPDATE posts SET score = score - 1 WHERE pId=' + req.params.pid, (err) => {
          if (err) {
            console.log(err.toString());
            res.status(500);
            return;
          }
          conn.query(`SELECT * FROM posts WHERE pId=` + req.params.pid, (err, rows) => {
            if (err) {
              console.log(err.toString());
              res.status(500);
              return;
            }
            res.status(202).json(rows);
          });
        });
      });
    } else {
      conn.query(`SELECT * FROM posts WHERE pId=` + req.params.pid, (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.status(500);
          return;
        }
        console.log('ONE VOTE per post, motherfucker.')
        res.status(406).json(rows);
      });
    }
  });
});

app.put('/posts/:username/:pid/upvote', (req, res) => {
  conn.query(`SELECT * FROM votes WHERE username="` + req.params.username+ `" AND pId ="` + req.params.pid + `";`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500);
      return;
    }
    if (rows.length === 0) {
      conn.query('INSERT INTO votes(username, pId, vote) VALUES(?,?,?);', [req.params.username, req.params.pid, 1], (err) => {
        if (err) {
          console.log(err.toString());
          res.status(500);
          return;
        }
        conn.query('UPDATE posts SET score = score + 1 WHERE pId=' + req.params.pid, (err) => {
          if (err) {
            console.log(err.toString());
            res.status(500);
            return;
          }
          conn.query(`SELECT * FROM posts WHERE pId=` + req.params.pid, (err, rows) => {
            if (err) {
              console.log(err.toString());
              res.status(500);
              return;
            }
            res.status(202).json(rows);
          });
        });
      });
    } else {
      conn.query(`SELECT * FROM posts WHERE pId=` + req.params.pid, (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.status(500);
          return;
        }
        console.log('ONE VOTE per post, motherfucker!')
        res.status(406).json(rows);
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
