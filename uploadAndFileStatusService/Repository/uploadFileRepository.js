const imageProcessModel = require('../models/imageProcessSchema.js');


const uploadFileRepository = async (excelData) =>{
    try{
        console.log('Coming inside the upload file repository');
        await imageProcessModel(excelData).save();
        return true;
    }catch(error){
        console.log('ERROR IN UPLOAD REPOSITORY FUNCTION ');
        throw new Error(error);
    }
}

module.exports = { uploadFileRepository }