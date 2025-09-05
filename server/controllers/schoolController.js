const schoolModel = require('../models/schoolModel');
const { getDistance } = require('../utils/distance'); 

exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude === undefined || longitude === undefined)
    return res.status(400).json({ error: 'All fields are required' });

  if (typeof latitude !== 'number' || typeof longitude !== 'number')
    return res.status(400).json({ error: 'Latitude and Longitude must be numbers' });

  schoolModel.addSchool({ name, address, latitude, longitude }, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'School added successfully', id: result.insertId });
  });
};


exports.getSchoolsByProximity = (req, res) => {
  const lat = parseFloat(req.query.lat);
  const lng = parseFloat(req.query.lng);

  if (isNaN(lat) || isNaN(lng))
    return res.status(400).json({ error: 'Latitude and longitude query parameters are required and must be numbers' });

  schoolModel.getAllSchools((err, schools) => {
    if (err) return res.status(500).json({ error: err });

    const sortedSchools = schools
      .map(s => ({ ...s, distance: getDistance(lat, lng, s.latitude, s.longitude) }))
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  });
};
