// 1. Load dotenv first
require('dotenv').config({ path: __dirname + '/.env' });

console.log('DB_USER:', process.env.DB_USER); // Should print 'root'

const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schools.js');

const app = express();
app.use(bodyParser.json());

app.use('/', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
