const db = require('../data/db.js')

//index
exports.getTodos = (res, req) => {
  db.query('SELECT * FROM todos ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

