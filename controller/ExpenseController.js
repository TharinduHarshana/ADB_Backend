const Expense = require('../models/expensesModel');

//get all Suppliers
exports.getAllExpense = (req, res) => {
    Expense.getAllExpense((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

//create an Expense
exports.createExpense = (req, res) => {
  const newExpense = req.body;
  Expense.create(newExpense, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: result.insertId, ...newExpense });
  });
};

//delete an Expense
exports.deleteExpense = (req, res) => {
  const id = req.params.id;
  Expense.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Expense deleted successfully' });
  });
};

//update an Expense
exports.updateExpense = (req, res) => {
  const id = req.params.id;
  const updateExpense = req.body;
  console.log(updateExpense)
    Expense.update(id, updateExpense, (err, result) => {
        if (err) {
        return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Expense updated successfully' });
    });
};

//get an Expense

exports.getExpense = (req, res) => {
  const id = req.params.id;
  Expense.get(id, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};
