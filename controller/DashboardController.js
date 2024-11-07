// controllers/DashboardController.js
const { getTableCountsAndOrderStatusCounts } = require('../models/DashbordModel');

const fetchStatistics = async (req, res) => {
  try {
    const data = await new Promise((resolve, reject) => {
      getTableCountsAndOrderStatusCounts((error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });

    console.log("Returned data:", data); // Log the structure to ensure it's correct

    const counts = {
      supplier: data.tableCounts[0]?.record_count || 0,
      category: data.tableCounts[1]?.record_count || 0,
      items: data.tableCounts[2]?.record_count || 0,
      expenses: data.tableCounts[3]?.record_count || 0,
      customer: data.tableCounts[4]?.record_count || 0,
      orders: data.tableCounts[5]?.record_count || 0,
      orderItems: data.tableCounts[6]?.record_count || 0,
      users: data.tableCounts[7]?.record_count || 0,
      orderStatusCounts: data.orderStatusCounts || [],
    };
    
    res.status(200).json(counts);
  } catch (error) {
    console.error("Error fetching data:", error); // Log error if occurs
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchStatistics };
