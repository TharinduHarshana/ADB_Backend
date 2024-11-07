const express = require('express');
const { getAllUser, createUser, deleteUser, updateUser, getUser,loginUser } = require('../controller/UserController');

const router = express.Router();

//get all Users
router.get('/', getAllUser);


//create an User
router.post('/', createUser);   

//delete an User
router.delete('/:id', deleteUser);

//update an User
router.put('/:id', updateUser);

//get an User
router.get('/:id', getUser);

//login user
router.post('/login', loginUser);

module.exports = router;