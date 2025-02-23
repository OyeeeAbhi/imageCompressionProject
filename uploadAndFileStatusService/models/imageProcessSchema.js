const mongoose = require('mongoose');
const ImageProcessSchema = new mongoose.Schema({
    requestId: { type: String, required: true, unique: true },
    productName: String,
    inputCsvFileData: [
        {
            serialNumber: String,
            productName: String,
            inputImages: [String],
            requestId: { type: String}
        }
    ],
    outputCsvFileData: [
        {
            serialNumber: String,
            productName: String,
            inputImages: [String],
            requestId: { type: String} 
        }
    ],
    status: { 
        type: String, 
        enum: ['Pending', 'Processing', 'Completed', 'Failed'], 
        default: 'Pending' 
    }
});

const imageProcessModel = mongoose.model('ImageProcess', ImageProcessSchema);
module.exports = imageProcessModel;
