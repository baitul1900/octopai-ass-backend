const express = require('express');
const { updateCourseHandler } = require('../controllers/courseController');


const router = express.Router();


router.put('/:courseId', updateCourseHandler);

module.exports = router;
