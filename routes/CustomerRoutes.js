const express = require('express'); 
const { getAllCustomer, createCustomer,deleteCustomer,updateCustomer,getCustomer } = require('../controller/CustomerController');
const router = express.Router();

//get all Customers
router.get('/', getAllCustomer);

//create an Customer
router.post('/', createCustomer);

//delete an Customer
router.delete('/:id', deleteCustomer);

//update an Customer
router.put('/:id', updateCustomer);

//get an Customer
router.get('/:id', getCustomer);

module.exports = router;