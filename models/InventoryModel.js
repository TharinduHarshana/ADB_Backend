const db = require('../config/db');

const Inventory = {
    getAllInventory: (callback) => {
        db.query('CALL GetInventoryDetails();', callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO items SET ?', data, callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM items WHERE item_id = ?', [id], callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE items SET ? WHERE item_id = ?', [data, id], callback);
    },
    get: (id, callback) => {
        db.query('SELECT * FROM items WHERE item_id = ?', [id], callback);
    },
    getAllSup : (callback) => {
        db.query('SELECT * FROM getSupplierWithID;',callback);
    },
    getAllCategory : (callback) => {
        db.query('SELECT * FROM getCategoryWithID;',callback);
    }
    };

    module.exports = Inventory;