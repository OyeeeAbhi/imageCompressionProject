const { Queue } = require('bullmq');

const redisConnection = require('./redisConfig.js');
const imageQueue = new Queue('image-processing' , {connection : redisConnection});

module.exports = imageQueue;
