const express = require('express');
const { webHookController } = require('../../controllers/webHookController');
const webhookRouter = express.Router();


webhookRouter.post('/statusUpdateWebhook' , webHookController);

module.exports = webhookRouter;