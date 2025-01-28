const express = require('express');
const multer = require('multer');
const { handleFileUpload } = require('../controllers/fileController.js');

const router = express.Router();


router.post('/upload', handleFileUpload);

module.exports = router;
