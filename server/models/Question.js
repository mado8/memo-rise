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

const Question = model('Memory', questionSchema);

module.exports = Question;