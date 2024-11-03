// models/itemModel.js
const db = require('../config/db');

const Item = {
  getAll: (callback) => {
    db.query('SELECT * FROM items', callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO items SET ?', data, callback);
  },
  // Define other CRUD operations as needed
};

module.exports = Item;
