const { uploadFileRepository } =  require('../Repository/uploadFileRepository');

const csv = require('csv-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const imageQueue = require('../configs/queueConfig.js');

const uploadFileService = ({path}) => {

    console.log('coming inside the upload File Service' , path);
    return new Promise((resolve, reject) => {
        try {
            const requestId = uuidv4();
            const csvFileData = [];

            fs.createReadStream(path , { encoding: 'utf-8' })
                .pipe(csv())
                .on('data', (row) => {
                    console.log(row , 'this is the row of excel');
                    const rowData = {
                        serialNumber: row['Serial Number'],
                        productName: row['Product Name'],
                        inputImages: [...row['Input Image Urls'].split(',')],
                        requestId: requestId
                    };
                    csvFileData.push(rowData);
                })
                .on('end', async () => {
                    try {
                    
                        const excelData = {
                            requestId,
                            inputCsvFileData: csvFileData,
                            outputImages: [],
                            status: 'Pending'
                        };

                        await uploadFileRepository(excelData);
                        
                        await imageQueue.add( 'image-processing' , excelData);
                        const jobCount = await imageQueue.getJobCounts();
                        console.log(jobCount , 'this is the job count');
                        resolve({ requestId });
                    } catch (error) {
                        reject(error);
                    }
                })
                .on('error', (error) => {
                    reject(error);
                });

        } catch (error) {
            console.log('ERROR IN UPLOAD FILE SERVICE', error);
            reject(error);
        }
    });
};

module.exports = {uploadFileService}



