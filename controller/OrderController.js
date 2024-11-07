const Order = require('../models/OrderModel');

// Get all orders
exports.getAllOrders = (req, res) => {
  Order.getAllOrder((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.createOrder = (req, res) => {
  const orderData = req.body;
  console.log(orderData);
  Order.create(orderData, (err, result) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Order created successfully', orderId: result.orderId });
  });
};


// Get a single order
exports.getSingleOrder = (req, res) => {
  const id = req.params.id;
  Order.get(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!result) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(result);
  });
};

// Update an order
exports.updateOrder = (req, res) => {
  const id = req.params.id;
  const updatedOrder = req.body;
  console.log(updatedOrder);
  Order.update(id, updatedOrder, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json({ message: 'Order updated successfully' });
  });
};

// Delete an order
exports.deleteOrder = (req, res) => {
  const id = req.params.id;
  Order.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  });
};

// Get order details by status
exports.getOrderDetailsByStatus = (req, res) => {
  const { status } = req.params; // Use `req.params` to get the status from URL params
  
  Order.getOrderDetailStatusWise(status, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results); 
  });
};
