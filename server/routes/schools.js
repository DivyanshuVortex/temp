const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

router.post('/addSchool', schoolController.addSchool); // ✅ should be a function
router.get('/listSchools', schoolController.getSchoolsByProximity); // ✅ should be a function

module.exports = router;
