const { Schema, model } = require('mongoose');
const dateFormat = require('../util/dateFormat');


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
    created_at: {
        type: Date,
        required: true,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
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
module.exports = Memory;

// module.exports = memorySchema;