const express = require('express');
const { getAllExpense, createExpense,deleteExpense,updateExpense,getExpense } = require('../controller/ExpenseController');

const router = express.Router();

//get all Suppliers
router.get('/', getAllExpense);

//create an Supplier
router.post('/', createExpense);

//delete an Supplier
router.delete('/:id', deleteExpense);

//update an Supplier
router.put('/:id', updateExpense);

//get an Supplier
router.get('/:id', getExpense);

module.exports = router;