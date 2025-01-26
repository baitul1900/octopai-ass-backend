require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes');
const connectDb = require('./config/database.js');
const scheduleCronJob = require('./config/cronConfig.js');




const app = express();

app.use(cors());
app.use(express.json());

// Database Connection
connectDb();

// Cron Jobs
scheduleCronJob();

app.use("/api/v1", router)

module.exports = app;





