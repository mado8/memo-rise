const { Schema, model } = require('mongoose');
const questionSchema = require('./Question');

const memorySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
        trim: true
    },
    // questions: [questionSchema]
    questions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Question'
        }
    ]
});

const Memory = model('Memory', memorySchema);
module.exports = memorySchema;

// module.exports = memorySchema;