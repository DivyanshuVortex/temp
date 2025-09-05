const db = require('../config/db');

const addSchool = (school, callback) => {
  const { name, address, latitude, longitude } = school;
  db.query(
    'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
    [name, address, latitude, longitude],
    callback
  );
};

const getAllSchools = callback => {
  db.query('SELECT * FROM schools', callback);
};

module.exports = { addSchool, getAllSchools };
