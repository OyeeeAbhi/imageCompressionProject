const redisConnection = {
    host: process.env.REDIS_URL,
    port: process.env.REDIS_PORT,
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD
};

module.exports = redisConnection;