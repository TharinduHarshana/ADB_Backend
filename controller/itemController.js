const Item = require('../models/itemModel');


//get all items
exports.getAllItems = (req, res) => {
  Item.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

//create an item
exports.createItem = (req, res) => {
  const newItem = req.body;
  Item.create(newItem, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: result.insertId, ...newItem });
  });
};
