const db = require('../data/db.js')

//index
exports.getTodos = (req, res) => {
  db.query('SELECT * FROM todos ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

//CREATE
exports.createTodo = (req, res) => {
  const { title } = req.body;

  db.query(
    'INSERT INTO todos (title) VALUES (?)',
    [title],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        id: result.insertId,
        title,
        status: 'todo',
      });
    }
  );
};

//UPDATE
exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  db.query(
    'UPDATE todos SET status = ? WHERE id = ?',
    [status, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Todo aggiornata' });
    }
  );
};

//DELETE
exports.deleteTodo = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM todos WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Todo eliminata' });
  });
};