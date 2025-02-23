const express = require('express');
const routes = express.Router();

const v1Router = require('./v1/v1RouterIndex.js');

routes.use('/v1' , v1Router);


module.exports = routes;