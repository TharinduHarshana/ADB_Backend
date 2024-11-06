const Customer = require('../models/CustomerModel');

//get all Customers
exports.getAllCustomer = (req, res) => {
    Customer.getAllCustomer((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

//create an Customer
exports.createCustomer = (req, res) => {
  const newCustomer = req.body;
  Customer.create(newCustomer, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: result.insertId, ...newCustomer });
  });
};

//delete an Customer
exports.deleteCustomer = (req, res) => {
  const id = req.params.id;
  Customer.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Customer deleted successfully' });
  });
};

//update an Customer
exports.updateCustomer = (req, res) => {
  const id = req.params.id;
  const updateCustomer = req.body;
  console.log(updateCustomer);
    Customer.update(id, updateCustomer, (err, result) => {
        if (err) {
        return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Customer updated successfully' });
    });
}

//get an Customer
exports.getCustomer = (req, res) => {
  const id = req.params.id;
  Customer.get(id, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};