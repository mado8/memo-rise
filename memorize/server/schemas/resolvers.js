const User = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../util/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log(context.user, "this is test")
      if (context.user) {
       
        return await User.findOne({ _id: context.user._id });
      }
       throw new AuthenticationError("Must be logged in");

    },
  },
  Mutation: {
    addUser: async (parent, {userData: {username, email, password}}, context) => {
      console.log('19: ' , username)
      const userFound = await User.findOne({username})
      console.log("21:" , userFound)
      if(userFound) {
        throw new AuthenticationError("Username taken. Please choose another username.");
      }
      const newUser = await User.create({username, email, password});
      console.log(newUser)
      const token = signToken(newUser);
      console.log(token)
      return {token, newUser};
    },
    addMemory: async (parent, {userData: {username}}, context) => {
      const findUser = await User.findOne({username});
      if(!findUser) {
        throw new AuthenticationError("User not found.");
      }
      const createMemory = User.findOneAndUpdate({username: context.username},
        {
          $addToSet: {
            memory: { title, description },
          },
        },)
      return createMemory
    }
  }

}

module.exports = resolvers;
