// models/statisticsModel.js
const db = require('../config/db');

const Dashboard = {
  getTableCountsAndOrderStatusCounts: (callback) => {
    const query = `CALL GetTableCountsAndOrderStatusCounts();`;
    
    db.query(query, (error, results) => {
      if (error) {
        return callback(error, null);
      }
      const tableCounts = [
        results[0][0],  // supplier
        results[1][0],  // category
        results[2][0],  // items
        results[3][0],  // expenses
        results[4][0],  // customer
        results[5][0],  // orders
        results[6][0],  // order_items
        results[7][0],  // users
      ];

      const orderStatusCounts = results[8]; 

      callback(null, { tableCounts, orderStatusCounts });
    });
  },

};

module.exports = Dashboard;
