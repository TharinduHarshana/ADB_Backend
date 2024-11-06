const db = require('../config/db');

const Category = {
  getAllCategory: (callback) => {
    db.query('SELECT * FROM CategoryDetails;', callback); // This assumes CategoryDetails is the view you're querying
  },
  create: (data, callback) => {
    db.query('INSERT INTO category SET ?', data, callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM category WHERE category_id = ?', [id], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE category SET ? WHERE category_id = ?', [data, id], callback);
  },
  get: (id, callback) => {
    db.query('SELECT * FROM category WHERE category_id = ?', [id], callback);
  },
};

module.exports = Category;
