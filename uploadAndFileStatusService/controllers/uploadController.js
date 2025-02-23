const { uploadFileService } = require('../service/uploadService.js');

const errorHandler = require('../utils/errorHandler.js');
const responseHandler = require('../utils/responseHandler.js');


const uploadFileController = async (req , res) =>{
    try{
        console.log('coming in controller' , req.file.path);
        const result = await uploadFileService({path : req.file.path});
        return responseHandler(res , 200 , result , true);
    }catch(error){
        console.log('ERROR IN CONTROLLER OF FILE UPLOAD FUNCTION' , error);
        return errorHandler(res , 500 , error);
    }
}

module.exports = {uploadFileController};