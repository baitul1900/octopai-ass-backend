const { processSubscriptions } = require('../services/paymentService.js');

const handleCronJob = async (req, res) => {
  await processSubscriptions();
  res.json({ message: 'Cron Job executed successfully' });
};

module.exports = { handleCronJob };
