const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');

const itemRoutes = require('./routes/itemRoutes');
const supplierRoutes = require('./routes/SupplierRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const InventoryRoutes = require('./routes/InventoryRoutes');
const ExpenseRoutes = require('./routes/ExpenseRoutes');
const Customer = require('./routes/CustomerRoutes');
const OrderRoutes = require('./routes/OrderRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

//API routes
app.use('/api/items', itemRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/inventory', InventoryRoutes);
app.use('/api/expenses', ExpenseRoutes);
app.use('/api/customers', Customer);
app.use('/api/orders', OrderRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});