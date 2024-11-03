const express = require('express');
const { getAllSupplier, createSupplier,deleteSupplier,updateSupplier,getSupplier } = require('../controller/SupplierController');

const router = express.Router();

//get all Suppliers
router.get('/', getAllSupplier);

//create an Supplier
router.post('/', createSupplier);

//delete an Supplier
router.delete('/:id', deleteSupplier);

//update an Supplier
router.put('/:id', updateSupplier);

//get an Supplier
router.get('/:id', getSupplier);



module.exports = router;
