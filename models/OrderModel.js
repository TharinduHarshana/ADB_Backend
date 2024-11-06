const db = require('../config/db');

const Order = {
    getAllOrder: (callback) => {
        db.query('SELECT * FROM orders;', callback);
    },
    create: (orderData, callback) => {
        // Extract `customer_id` directly from `orderData`
        const { customer_id, total_amount, order_date, items } = orderData;
    
        // Insert into orders table first
        const orderQuery = 'INSERT INTO orders (customer_id, total_amount, order_date) VALUES (?, ?, ?)';
        db.query(orderQuery, [customer_id, total_amount, order_date], (err, result) => {
            if (err) return callback(err);
    
            const orderId = result.insertId;
    
            // Prepare items for batch insert into order_items table
            const orderItemsData = items.map(item => [
                orderId,
                item.item_id,
                item.quantity,
                item.discount,
                item.total_price
            ]);
    
            const orderItemsQuery = `
                INSERT INTO order_items (order_id, item_id, quantity, discount, total_price)
                VALUES ?
            `;
    
            // Insert into order_items table
            db.query(orderItemsQuery, [orderItemsData], (err) => {
                if (err) return callback(err);
                callback(null, { orderId });
            });
        });
    },
    
    delete: (id, callback) => {
        db.query('DELETE FROM orders WHERE order_id = ?', [id], callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE orders SET ? WHERE order_id = ?', [data, id], callback);
    },
    get: (id, callback) => {
        db.query('SELECT * FROM orders WHERE order_id = ?', [id], callback);
    },
    getOrderDetailStatusWise: (status, callback) => {
        db.query('CALL GetItemAndCustomerDetailsByStatus(?);', [status], callback);
    }


};

module.exports = Order;