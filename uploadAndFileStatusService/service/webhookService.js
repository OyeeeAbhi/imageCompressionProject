const { webhookRepository } = require("../Repository/webhookRepository");

const webhookService = async({requestId , outputCsvFileData , status})=>{
    try{
        console.log('inside the webhook service function');
        const result = await webhookRepository({requestId , outputCsvFileData , status});
        return result;
    }catch(error){
        console.log('ERROR IN WEBHOOK SERVICE FUNCTION' , error);
        throw new Error(error);
    }
}

module.exports = {webhookService};