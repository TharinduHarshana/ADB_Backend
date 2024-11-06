const express = require('express');
const { getAllInventory, createInventory,deleteInventory,updateInventory,getInventory,getAllSup,getAllCategory} = require('../controller/InventoryController');
const router = express.Router();

//get all Inventory
router.get('/', getAllInventory);

//get supplier with id
router.get('/sup', getAllSup);

//get category with id
router.get('/category', getAllCategory);

//create an Inventory
router.post('/', createInventory);

//delete an Inventory
router.delete('/:id', deleteInventory);

//update an Inventory
router.put('/:id', updateInventory);

//get an Inventory
router.get('/:id', getInventory);



module.exports = router;