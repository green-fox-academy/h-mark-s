'use strict';

const app = require('../routes');
const test = require('tape');
const request = require('supertest');

test('groot endpoint', (t) => {
  request(app)
    .get('/groot')
    .expect('Content-type', /json/)
    .end((err, res) => {
      const expected = {
          "error": "I am Groot!"
        };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});

test('groot endpoint', (t) => {
  const message = 'testing';
  request(app)
    .get(`/groot?message=${message}`)
    .expect('Content-type', /json/)
    .end((err, res) => {
      const expected = {
          "received": message,
          "translated": "I am Groot!"
        };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});
