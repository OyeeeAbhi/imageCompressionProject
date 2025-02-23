const { webhookService } = require('../service/webhookService.js');
const errorHandler = require('../utils/errorHandler.js');
const responseHandler = require('../utils/responseHandler.js');

const webHookController = async(req,res)=>{
    try{
        const {requestId , outputCsvFileData , status} = req.body;
        const result = await webhookService({requestId , outputCsvFileData , status});
        return responseHandler(res , 201 , result , true);
    }catch(error){
        console.log('ERROR IN WEB HOOK CONTROLLER FUNCTION' , error);
        return errorHandler(res , 500 , error);
    }
}

module.exports = {webHookController};