const Supplier = require('../models/SuppliersModel');


//get all Suppliers
exports.getAllSupplier = (req, res) => {
    Supplier.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

//create an Supplier
exports.createSupplier = (req, res) => {
  const newSupplier = req.body;
  Supplier.create(newSupplier, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: result.insertId, ...newSupplier });
  });
};

//delete an Supplier
exports.deleteSupplier = (req, res) => {
  const id = req.params.id;
  Supplier.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Supplier deleted successfully' });
  });
};

//update an Supplier
exports.updateSupplier = (req, res) => {
  const id = req.params.id;
  const updatedSupplier = req.body;
    Supplier.update(id, updatedSupplier, (err, result) => {
        if (err) {
        return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Supplier updated successfully' });
    });
}

//get an Supplier
exports.getSupplier = (req, res) => {
  const id = req.params.id;
  Supplier.get(id, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};
