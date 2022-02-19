const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');

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
    // memories: [{memorySchema}]
    memories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Memory'
        }
    ]
});
userSchema.pre('save', async function (next) {
    // creating a account/ password is changed
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
 
    next();
  });
  
  // custom method to compare and validate password for logging in
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
const User = model('User', userSchema);

module.exports = User;