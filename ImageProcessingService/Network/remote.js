const axios = require('axios');
const remoteConfig = require('./remoteConfig.js');

const statusUpdater = async({requestId , outputCsvFileData , status}) =>{
    try{
        const url = remoteConfig.webhookUrl;
        const payload = {
                            requestId,
                            outputCsvFileData,
                            status
                        };

        const response = await axios.post(url , payload , {
            headers: {
                "Content-Type": "application/json"
            }});
        
        console.log(response.data.data , 'webhook url call made successfully');
        return true;
    }catch(error){
        console.log('ERROR IN STATUS UPDATE NETWORK CALL FUNCTION' , error);
        throw new Error(error);
    }
}

module.exports = {statusUpdater};