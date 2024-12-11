const express = require('express');
const actionRoutes = require('./Routes/actionRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

app.use('/api',actionRoutes);

module.exports = app;