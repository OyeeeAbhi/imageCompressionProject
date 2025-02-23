const express = require('express');
const dotenv = require('dotenv');


dotenv.config();
const PORT = process.env.PORT;
const connectDB =  require('./configs/dbConfig.js');
const routes = require('./routes/index.js');
const app = express();


app.use(express.json());
app.use(express.urlencoded());
app.use('/api' , routes);


app.listen(PORT , async ()=>{
    try{
        console.log('Upload and status service Listening on PORT :: ' , PORT);
        await connectDB();
    }catch(error){
        console.log('ERROR OCCUREC WHILE STARTING THE SERVER' , error);
    }
})

