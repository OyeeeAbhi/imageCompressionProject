const imageProcessModel = require('../models/imageProcessSchema.js');

const fileStatusRepository = async({requestId})=>{
    try{
        const status = imageProcessModel.findOne({requestId}).select({status : 1 , _id : 0});
        return status;
    }catch(error){
        console.log('ERROR IN STATUS REPOSITORY FUNCTION' , error);
        throw new Error(error);
    }
}

module.exports = {fileStatusRepository};