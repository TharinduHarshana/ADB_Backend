const express = require('express');
const { fetchStatistics } = require( '../controller/DashboardController');

const router = express.Router();

router.get('/statistics', fetchStatistics);

module.exports= router;
