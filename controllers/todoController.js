const { json } = require('express');
const db = require('../data/db.js')

//index
exports.getTodos = (res, req) => {
  db.query('SELECT * FROM todos ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

//CREATE
exports.createTodo = (req, res) => {
  const { title } = req.body;
  db.query('INSERT INTO todos (title) VALUES (?)', [title], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, title, status: 'todo' })
  })
}