const express = require('express');
const { getAllCategory, createCategory,deleteCategory,updateCategory,getCategory } = require('../controller/CategoryController');

const router = express.Router();

//get all Suppliers
router.get('/', getAllCategory);

//create an Supplier
router.post('/', createCategory);

//delete an Supplier
router.delete('/:id', deleteCategory);

//update an Supplier
router.put('/:id', updateCategory);

//get an Supplier
router.get('/:id', getCategory);



module.exports = router;
