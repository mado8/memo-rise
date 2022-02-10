const { Schema, Model } = require('mongoose');
const questionSchema = require('./Question');

const memorySchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
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
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    questions: [questionSchema]
});

module.exports = memorySchema;