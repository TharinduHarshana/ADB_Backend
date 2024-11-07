const db = require('../config/db');

const User = {
  getAll: (callback) => {
    db.query('SELECT * FROM users;', callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO users SET ?', data, callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE users SET ? WHERE id = ?', [data, id], callback);
  },
  get: (id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
  },
  findByUsername: (username, callback) => {
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      if (results.length > 0) {
        callback(null, results[0]); // Return the first matching user
      } else {
        callback(null, null); // No user found
      }
    });
  }
};



module.exports = User;