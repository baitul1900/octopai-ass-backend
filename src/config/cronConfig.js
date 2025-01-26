const cron = require('node-cron');

const scheduleCronJob =  () => {
    cron.schedule("0 0 * * *",  async () => {
        console.log("This job runs every day at 00:00");
    })

};


module.exports = scheduleCronJob
