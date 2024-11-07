const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Optional for JWT-based authentication

//get all Users
exports.getAllUser = (req, res) => {
    User.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
    console.log(results);
  });
};

//create an User
exports.createUser = (req, res) => {
  const newUser = req.body;
  User.create(newUser, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: result.insertId, ...newUser });
  });
};

//delete an User
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'User deleted successfully' });
  });
};

//update an User
exports.updateUser = (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
    User.update(id, updatedUser, (err, result) => {
        if (err) {
        return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'User updated successfully' });
    }
    );
}

//get an User
exports.getUser = (req, res) => {
  const id = req.params.id;
  User.get(id, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};


// login user
exports.loginUser = (req, res) => {
  const { username, password } = req.body;
  
  User.findByUsername(username, (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Assuming passwords are stored in plain text; for production, use bcrypt.compare
    if (user.password === password) {
      const { id, fname, lname, user_role } = user;
      const userData = { id, username, fname, lname, role: user_role };

      res.json(userData); // Return user data to store in local storage
    } else {
      res.status(401).json({ message: 'Invalid password' });
    }
  });
};
