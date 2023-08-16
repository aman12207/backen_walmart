const express = require('express');
const dotenv = require('dotenv');
const errorMiddleware = require('./middleware/error.js');

const app = express();

app.use(express.json()); // This includes bodyParser.json()

app.use(express.urlencoded({ extended: true }));

// Load environment variables
dotenv.config({ path: 'config/config.env' });

// Importing routes
const productRoute = require('./routes/productRoute.js');
const billRoute = require('./routes/billRoute.js')

// Using routes
app.use('/api/v1', productRoute);
app.use('/api/v1', billRoute);

// Error middleware
app.use(errorMiddleware);

module.exports = app;
