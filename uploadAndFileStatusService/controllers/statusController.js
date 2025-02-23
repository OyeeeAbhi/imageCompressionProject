const {fileStatusService } = require("../service/statusService");
const errorHandler = require("../utils/errorHandler");
const responseHandler = require("../utils/responseHandler");

const fileStatusController = async(req , res) =>{
    try{
        const requestId = req.body.requestId || '';
        const status = await fileStatusService({requestId});
        return responseHandler(res , 200 , status , true);
    }catch(error){
        console.log('ERROR IN FILE STATUS FUNCTION CONTROLLER' , error);
        return errorHandler(res , 500 , error);
    }
}

module.exports = {fileStatusController};