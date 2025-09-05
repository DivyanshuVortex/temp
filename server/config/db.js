// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false // for self-signed cert
  }
});

// Ensure connect works
db.connect(err => {
  if (err) console.error('DB connection failed:', err);
  else console.log('Connected to MySQL');
});

module.exports = db;
