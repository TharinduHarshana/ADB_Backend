const db = require('../config/db');

const Report = {
  // Function to calculate net profit by date range
  getNetProfitByDateRange: (startDate, endDate, callback) => {
    db.query(
      'SELECT CalculateNetProfitByDateRange(?, ?) AS net_profit',
      [startDate, endDate],
      (err, profitResult) => {
        if (err) return callback(err);

        // Call the procedure to get sales and expense details
        db.query(
          'CALL GetSalesAndExpenseDetailsByDateRange(?, ?)',
          [startDate, endDate],
          (err, detailsResult) => {
            if (err) return callback(err);

            // Combine results into one response
            const netProfit = profitResult[0].net_profit;
            const salesDetails = detailsResult[0];
            const expenseDetails = detailsResult[1];
            
            // Respond with net profit, sales details, and expense details
            callback(null, { netProfit, salesDetails, expenseDetails });
          }
        );
      }
    );
  },
};

module.exports = Report;
