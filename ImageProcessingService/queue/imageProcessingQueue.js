const { Worker } = require('bullmq');
const sharp = require('sharp');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const {statusUpdater} = require('../Network/remote.js');
const redisConnection = require('../config/redisConfig.js');

const worker = new Worker('image-processing', async (job) => {
    console.log('coming here inside the worker');
    const { requestId , inputCsvFileData } = job.data;
    const outputCsvFileData = [];

    try {
        await statusUpdater({requestId , outputCsvFileData : [] , status : 'Processing'});
        for (let inputRowData of inputCsvFileData) {
            let outputRowData = {
                requestId , 
                productName : inputRowData.productName , 
                serialNumber : inputRowData.serialNumber , 
                outputImages : []
            }
            for(let images of inputRowData.inputImages){
                const imgPath = path.join(__dirname, '..', 'uploads', `output-${Date.now()}.jpg`);

                // Download image from each row
                const response = await axios({ url: images, responseType: 'arraybuffer' });
                fs.writeFileSync(imgPath, response.data);

                // Compress image
                const compressedImgPath = imgPath.replace('output-', 'compressed-');
                await sharp(imgPath).jpeg({ quality: 50 }).toFile(compressedImgPath);

                outputRowData.outputImages.push(compressedImgPath);
            }
            outputCsvFileData.push(outputRowData);
        }



        await statusUpdater({requestId , outputCsvFileData  , status : 'Completed'});


    } catch (error) {
        console.error('Image Processing Error:', error);
        await statusUpdater({requestId , outputCsvFileData : [] , status : "Failed"});
        throw new Error(error);
    }
} , {connection : redisConnection});

