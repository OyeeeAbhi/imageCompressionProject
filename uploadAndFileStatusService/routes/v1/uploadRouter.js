const express = require('express');
const multer = require('multer');
const { uploadFileController } = require('../../controllers/uploadController');

const uploadRouter = express.Router();
const upload = multer({ dest: 'uploads/' });


uploadRouter.post('/uploadFile' , upload.single('file') , uploadFileController);


module.exports = uploadRouter;