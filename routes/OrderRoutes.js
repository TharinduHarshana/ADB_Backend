const express = require('express');
const { getAllOrders, createOrder, deleteOrder, updateOrder, getSingleOrder,getOrderDetailsByStatus } = require('../controller/OrderController');
const router = express.Router();

// Get all orders
router.get('/', getAllOrders);

// Create a new order
router.post('/', createOrder);

//get status wise order details
router.get('/:status', getOrderDetailsByStatus);

// Delete an order
router.delete('/:id', deleteOrder);

// Update an order
router.put('/:id', updateOrder);

// Get a single order
router.get('/:id', getSingleOrder);



module.exports = router;
