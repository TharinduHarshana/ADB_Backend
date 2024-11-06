const Category = require('../models/categoryModel');

//get all Suppliers
exports.getAllCategory = (req, res) => {
    Category.getAllCategory((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

//create an Category
exports.createCategory = (req, res) => {
  const newCategory = req.body;
  Category.create(newCategory, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: result.insertId, ...newCategory });
  });
};

//delete an Category
exports.deleteCategory = (req, res) => {
  const id = req.params.id;
  Category.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Category deleted successfully' });
  });
};

//update an Category
exports.updateCategory = (req, res) => {
  const id = req.params.id;
  const updateCategory = req.body;
    Category.update(id, updateCategory, (err, result) => {
        if (err) {
        return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Category updated successfully' });
    });
}

//get an Category
exports.getCategory = (req, res) => {
  const id = req.params.id;
  Category.get(id, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};
