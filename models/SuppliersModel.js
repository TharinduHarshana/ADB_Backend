const db = require('../config/db');

const Item = {
  getAll: (callback) => {
    db.query('SELECT * FROM supplier', callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO supplier SET ?', data, callback);
  },
    delete: (id, callback) => {
        db.query('DELETE FROM supplier WHERE supplier_id = ?', [id], callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE supplier SET ? WHERE supplier_id = ?', [data, id], callback);
    },
    get: (id, callback) => {
        db.query('SELECT * FROM supplier WHERE supplier_id = ?', [id], callback);
    }

};
module.exports = Item;
