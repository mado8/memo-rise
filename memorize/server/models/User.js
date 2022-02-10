const { Schema, model } = require('mongoose');
const memorySchema = require('./Memory')

const userSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    memory: [memorySchema]
});

const User = model('User', userSchema);

module.exports = User;