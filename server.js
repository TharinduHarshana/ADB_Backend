const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');

const itemRoutes = require('./routes/itemRoutes');
const supplierRoutes = require('./routes/SupplierRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

//API routes
app.use('/api/items', itemRoutes);
app.use('/api/suppliers', supplierRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});