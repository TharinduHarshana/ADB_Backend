const db = require('../config/db');

const Expense = {
    getAllExpense: (callback) => {
        db.query('SELECT * FROM ExpenseDetails;', callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO expenses SET ?', data, callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM expenses WHERE expense_id = ?', [id], callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE expenses SET ? WHERE expense_id = ?', [data, id], callback);
    },
    get: (id, callback) => {
        db.query('SELECT * FROM expenses WHERE expense_id = ?', [id], callback);
    },
    };

module.exports = Expense;