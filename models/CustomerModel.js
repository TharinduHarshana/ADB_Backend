const db = require('../config/db');

const Customer = {
    getAllCustomer: (callback) => {
        db.query('SELECT * FROM customerDetails;', callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO customer SET ?', data, callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM customer WHERE customer_id = ?', [id], callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE customer SET ? WHERE customer_id = ?', [data, id], callback);
    },
    get: (id, callback) => {
        db.query('SELECT * FROM customer WHERE customer_id = ?', [id], callback);
    },
};

module.exports = Customer;