const { Schema, model } = require('mongoose');
const memorySchema = require('./Memory')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 20,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    memories: [{memorySchema}]
});

const User = model('User', userSchema);

module.exports = User;