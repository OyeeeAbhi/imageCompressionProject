const express = require('express');
const { fileStatusController } = require('../../controllers/statusController');

const statusRouter = express.Router();

statusRouter.get('/fileStatus' , fileStatusController);


module.exports = statusRouter;