const imageProcessModel = require('../models/imageProcessSchema.js');

const webhookRepository = async({requestId , outputCsvFileData , status}) =>{
    try{
        const updatedData = (status == 'Completed') ? {outputCsvFileData : outputCsvFileData , status: status } : {status : status};
        console.log(updatedData , 'coming inside the webhook repository function');
        await imageProcessModel.findOneAndUpdate({requestId} ,  updatedData);
        return {result : 'Status Updated Successfully'};        
    }catch(error){
        console.log('ERROR IN WEB HOOK REPOSITORY FUNCTION' , error);
        throw new Error(error);
    }
}

module.exports = {webhookRepository};