const Report = require('../models/ReportModel');

// Get net profit within a date range
exports.getNetProfitByDateRange = (req, res) => {
    const { start_date, end_date } = req.query;
  
    // Ensure start_date and end_date are provided
    if (!start_date || !end_date) {
      return res.status(400).json({ error: "Start date and end date are required" });
    }
  
    Report.getNetProfitByDateRange(start_date, end_date, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({
        net_profit: results.netProfit,
        sales_details: results.salesDetails,
        expense_details: results.expenseDetails,
      });
    });
  };
  
