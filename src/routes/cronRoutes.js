const express = require('express');
const { handleCronJob } = require('../controllers/cronController.js');

const router = express.Router();

// Route to run the cron job
router.get('/run', handleCronJob);

module.exports = router;
