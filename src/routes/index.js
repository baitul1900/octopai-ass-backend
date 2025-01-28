
const express = require('express');
const cronRoutes = require('./cronRoutes');
const fileRoutes = require('./fileRoutes');
const courseRoutes = require('./courseRoutes');



const router = express.Router();

// Define all the routes
router.use('/cron', cronRoutes);
router.use('/files', fileRoutes);
router.use('/courses', courseRoutes);






module.exports = router;