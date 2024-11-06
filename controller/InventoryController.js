const Inventory = require('../models/InventoryModel');


// Get all inventory items
exports.getAllInventory = (req, res) => {
  Inventory.getAllInventory((err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json(results[0] || []);
  });
};

// Create a new inventory item
exports.createInventory = (req, res) => {
  const newItem = req.body;
  Inventory.create(newItem, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: result.insertId, ...newItem });
  });
};

// Delete an inventory item
exports.deleteInventory = (req, res) => {
  const id = req.params.id;
  Inventory.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Inventory item deleted successfully' });
  });
};

// Update an inventory item
exports.updateInventory = (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  Inventory.update(id, updateData, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Inventory item updated successfully' });
  });
};

// Get a single inventory item
exports.getInventory = (req, res) => {
  const id = req.params.id;
  Inventory.get(id, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// get supplier with id
exports.getAllSup = (req, res) => {
  Inventory.getAllSup((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// get category with id
exports.getAllCategory = (req, res) => {
  Inventory.getAllCategory((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};
