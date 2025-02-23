const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT ;
require('./queue/imageProcessingQueue.js');

app.listen(PORT , async()=>{
    try{
        console.log('Image Processing Service Started on PORT ::'  , PORT )
    }catch(error){
        console.log('ERROR OCCURED WHILE STARTING IMAGE PROCESSING QUEUE SERVICE');

    }
})