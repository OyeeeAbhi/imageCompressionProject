const express = require('express');
const v1Router = express.Router();

const statusRouter = require('./statusRouter.js');
const uploadRouter = require('./uploadRouter.js');
const webhookRouter = require('./webhookRouter.js');

v1Router.use('/status' , statusRouter);
v1Router.use('/upload' , uploadRouter);
v1Router.use('/webhook' , webhookRouter);

module.exports = v1Router;