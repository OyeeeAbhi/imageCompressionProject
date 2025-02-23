const {fileStatusRepository} = require("../Repository/statusRepository");

const fileStatusService = async({requestId}) =>{
    try{
        const status = await fileStatusRepository({requestId});
        return status;
    }catch(error){
        console.log('ERROR IN STATUS SERVICE FUNCTION' , error);
        throw new Error(error);
    }
}

module.exports = {fileStatusService}