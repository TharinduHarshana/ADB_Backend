const express = require('express');
const { getAllItems, createItem } = require('../controller/itemController');

const router = express.Router();

router.get('/', getAllItems);

router.post('/', createItem);

module.exports = router;
