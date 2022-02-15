const { Schema } = require('mongoose');

const questionSchema = new Schema({
    question: {
        type: String,
        required: true,
        trim: true
    },
    answer:{
        type: String, 
        required: true,
        trim: true
    }
})

module.exports = questionSchema;