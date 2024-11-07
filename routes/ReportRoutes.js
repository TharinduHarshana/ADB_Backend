const express = require('express');
const {getNetProfitByDateRange}=require ('../controller/ReportController');
const router = express.Router();

// Route to get net profit within a date range
router.get('/net-profit', getNetProfitByDateRange);


module.exports = router;