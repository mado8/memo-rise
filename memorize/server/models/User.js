const { Schema, Model } = require('mongoose');

const userSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    memory: [
        {
            type: String,
            trim: true
        }
    ]
});

const User = model('User', userSchema);

module.exports = User;